import React, { Component, PropTypes } from 'react';
import merge from 'lodash.merge';

let ua = navigator.userAgent.toLowerCase();
let _platform = function(os) {
    let ver = ('' + (new RegExp(os + '(\\d+((\\.|_)\\d+)*)').exec(ua) || [,0])[1]).replace(/_/g, '.');
    // undefined < 3 === false, but null < 3 === true
    return parseFloat(ver) || undefined;
};
let os = {
    ios: _platform('os '),
    android: _platform('android[/ ]'),
    pc : !_platform('os ') && !_platform('android[/ ]')
};

export default class Touch extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};

        this.touchInfo = {
            x: null,
            y: null,
            x2: null,
            y2: null,
            start: 0,
            last: 0,
            isDoubleTap: false,
            touchTimeout: null,
            tapTimeout: null,
            swipeTimeout: null,
            longTapTimeout: null
        };

        this.devicePixelRatio = window.devicePixelRatio || 1;
        
        this.longTapDelay = 750;
        this.maxTapAbsX = 30;
        this.maxTapAbsY = os.android ? 5 : 30;

        this.getDefaultTouchInfo = this.getDefaultTouchInfo.bind(this);
        this.longTap = this.longTap.bind(this);
        this.cancelLongTap = this.cancelLongTap.bind(this);
        this.cancelAll = this.cancelAll.bind(this);

        this.calculatePos = this.calculatePos.bind(this);
        this.touchStart = this.touchStart.bind(this);
        this.touchMove = this.touchMove.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
    }

    componentWillReceiveProps() {
    }

    componentDidMount() {
        window.addEventListener('scroll', this.cancelAll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.cancelAll, false);
    }

    getDefaultTouchInfo() {
        return {
            x: null,
            y: null,
            x2: null,
            y2: null,
            start: 0,
            last: 0,
            isDoubleTap: false,
            touchTimeout: null,
            tapTimeout: null,
            swipeTimeout: null,
            longTapTimeout: null
        };
    }

    longTap() {
        this.touchInfo.longTapTimeout = null;

        if (this.touchInfo.last) {
            this.props.onLongTap && this.props.onLongTap();
            this.touchInfo = this.getDefaultTouchInfo();
        }
    }

    cancelLongTap() {
        this.touchInfo.longTapTimeout && clearTimeout(this.touchInfo.longTapTimeout);

        this.touchInfo.longTapTimeout = null;
    }

    cancelAll() {
        this.touchInfo.touchTimeout && clearTimeout(this.touchInfo.touchTimeout);
        this.touchInfo.tapTimeout && clearTimeout(this.touchInfo.tapTimeout);
        this.touchInfo.swipeTimeout && clearTimeout(this.touchInfo.swipeTimeout);
        this.touchInfo.longTapTimeout && clearTimeout(this.touchInfo.longTapTimeout);

        this.touchInfo = this.getDefaultTouchInfo();
    }

    calculatePos(e) {
        var x = e ? e.touches[0].pageX : this.touchInfo.x2;
        var y = e ? e.touches[0].pageY : this.touchInfo.y2;

        if (x === null && y === null) {
            return {
                deltaX: 0,
                deltaY: 0,
                absX: 0,
                absY: 0
            }
        }
     
        var xd = this.touchInfo.x - x;
        var yd = this.touchInfo.y - y;
     
        var axd = Math.abs(xd);
        var ayd = Math.abs(yd);
     
        return {
            deltaX: xd,
            deltaY: yd,
            absX: axd,
            absY: ayd
        };
    }
     
    touchStart(e) {
        if (e.touches.length > 1) {
            return;
        }

        let firstTouch = e.touches[0];

        if (e.touches && e.touches.length === 1 && this.touchInfo.x2) {
            // Clear out touch movement data if we have it sticking around
            // This can occur if touchcancel doesn't fire due to preventDefault, etc.
            merge(this.touchInfo, {
                x2: null,
                y2: null
            });
        }

        let now = Date.now(),
            delta = now - (this.touchInfo.last || now);

        this.touchInfo.touchTimeout && clearTimeout(this.touchInfo.touchTimeout);

        if (delta > 0 && delta <= 250) {
            merge(this.touchInfo, {
                isDoubleTap: true
            });
        }

        merge(this.touchInfo, {
            start: now,
            last: now,
            x: firstTouch.pageX,
            y: firstTouch.pageY,
            longTapTimeout: setTimeout(this.longTap, this.longTapDelay)
        });
    }
     
    touchMove(e) {
        this.cancelLongTap();

        merge(this.touchInfo, {
            x2: e.touches[0].pageX,
            y2: e.touches[0].pageY
        });

        let pos = this.calculatePos(e);

        if (pos.absX > Math.round(20 / this.devicePixelRatio) && pos.absX > pos.absY) {
            e.preventDefault();
        }
    }
     
    touchEnd(e) {
        this.cancelLongTap();

        let pos = this.calculatePos();

        // swipe
        if ((this.touchInfo.x2 && pos.absX > this.maxTapAbsX) ||
            (this.touchInfo.y2 && pos.absY > this.maxTapAbsY)) {
            let time = Date.now() - this.touchInfo.start,
                velocity = Math.sqrt(pos.absX * pos.absX + pos.absY * pos.absY) / time,
                isFlick = velocity > this.props.flickThreshold;

            e.persist();
            merge(this.touchInfo, {
                swipeTimeout: setTimeout(() => {
                    this.props.onSwipe && this.props.onSwipe(e, pos.deltaX, pos.deltaY, isFlick);

                    if (pos.absX > pos.absY) {
                        if (pos.deltaX > 0) {
                            this.props.onSwipeLeft && this.props.onSwipeLeft(e, pos.deltaX, isFlick);
                        } else {
                            this.props.onSwipeRight && this.props.onSwipeRight(e, pos.deltaX, isFlick);
                        }
                    } else {
                        if (pos.deltaY > 0) {
                            this.props.onSwipeUp && this.props.onSwipeUp(e, pos.deltaY, isFlick);
                        } else {
                            this.props.onSwipeDown && this.props.onSwipeDown(e, pos.deltaY, isFlick);
                        }
                    }

                    this.touchInfo = this.getDefaultTouchInfo();
                }, 0)
            });
        }
        // normal tap
        else if (this.touchInfo.last) {
            // don't fire tap when delta position changed by more than 30 pixels,
            // for instance when moving to a point and back to origin
            if (pos.absX < this.maxTapAbsX && pos.absY < this.maxTapAbsY) {
                // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
                // ('tap' fires before 'scroll')
                e.persist();
                merge(this.touchInfo, {
                    tapTimeout: setTimeout(() => {
                        // trigger universal 'tap' with the option to cancelTouch()
                        // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
                        this.props.onTap && this.props.onTap(e);

                        // trigger double tap immediately
                        if (this.touchInfo.isDoubleTap) {
                            this.props.onDoubleTap && this.props.onDoubleTap(e);
                            this.touchInfo = this.getDefaultTouchInfo();
                        }

                        // trigger single tap after 250ms of inactivity
                        else {
                            merge(this.touchInfo, {
                                touchTimeout: setTimeout(() => {
                                    merge(this.touchInfo, {
                                        touchTimeout: null
                                    });
                                    this.props.onSingleTap && this.props.onSingleTap(e);
                                    this.touchInfo = this.getDefaultTouchInfo();
                                }, 250)
                            });
                        }
                    }, 0)
                });
            } else {
                this.touchInfo = this.getDefaultTouchInfo();
            }
        }
    }

    render() {
        return (
            <div {...this.props}
                onTouchStart={this.touchStart}
                onTouchMove={this.touchMove}
                onTouchEnd={this.touchEnd}
                onTouchCancel={this.cancelAll} >
                  {this.props.children}
            </div>
        )
    }
}

Touch.propTypes = {
    onTap: PropTypes.func,
    onSingleTap: PropTypes.func,
    onDoubleTap: PropTypes.func,
    onLongTap: PropTypes.func,
    onSwipe: PropTypes.func,
    onSwipeUp: PropTypes.func,
    onSwipeRight: PropTypes.func,
    onSwipeDown: PropTypes.func,
    onSwipeLeft: PropTypes.func
};
Touch.defaultProps = {
    flickThreshold: 0.6
};