import React, { Component } from 'react';
import merge from 'lodash.merge';
import Connect from '../connect/connect';
import {
    getNewsDetail
} from '../db';

import Spinner from 'react-spin-component';
import Touch from 'touch';

import './detail.less';

class Detail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
        this.newsId = this.props.params.id;
        this.commentId = this.props.params.commentid;

        this.getNewsDetail = getNewsDetail.bind(this);
        this.goBack = this.goBack.bind(this);
        this.goToComment = this.goToComment.bind(this);
    }

    componentDidMount() {
        let keys = Object.keys(this.props.details);

        if (!keys.length) {
            this.getNewsDetail({
                id: this.newsId
            });
        }
    }

    goBack() {
        this.context.router.goBack();
    }

    goToComment() {
        this.context.router.push('comment/' + this.commentId);
    }

    render() {
        let details = this.props.details || {},
            detailStr = details.hasOwnProperty(this.newsId) ? details[this.newsId] : '';

        let detailContent = detailStr.split('\n\n').map((item, index) => {
            // console.log(item);
            switch (index) {
                case 0: {
                    return (
                        <p key={index} className="title">{item}</p>
                    );
                }
                case 1: {
                    return (
                        <p key={index} className="src">{item}</p>
                    );
                }
                default: {

                    let regex = new RegExp('(\[http:\/\/(\w.+)\])', 'i');
                    let matches = item.match(regex);

                    // console.log(matches);
                    if (matches !== null && !!~matches.input.indexOf('\[http://')) {
                        // console.log(item);
                        return (
                            <p key={index} className="imgNode">
                                <img src={item.replace('\[', '').replace('\]', '')} />
                            </p>
                        );
                    }
                    else {
                        return (
                            <p key={index} className="text">{item}</p>
                        );
                    }
                }
            }
        });

        return (
            <div className="detail-wrapper">
                {detailContent}
                <div className="btns">
                    <Touch onTap={this.goBack}>
                        首页
                    </Touch>
                    <Touch onTap={this.goToComment}>
                        精彩评论
                    </Touch>
                </div>
                <Spinner isShow={this.props.spinLoading} />
            </div>
        );
    }
}

Detail.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Connect(Detail);
