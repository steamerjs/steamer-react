import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';

@pureRender
export default class Scroll extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			
		};
		this.isLoading = false;
		this.prvScrollTop = 0;
		this.scrollTopCache = {};
		this.prvScrollTopCache = {};
		this.refreshScroll = this.refreshScroll.bind(this);
	}

	componentWillMount() {
		
	}

	componentDidMount() {
		this.bindScrollEvt();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("==================componentDidUpdate==============");
	}

	refreshScroll() {
		this.prvScrollTop = this.prvScrollTopCache[this.props.tabs.active] = 0;
	}


	bindScrollEvt() {
		var _this = this;
		var timer = null;

		window.addEventListener('scroll', function(e) {
			// 延迟计算
			timer && clearTimeout(timer);
			timer = setTimeout(function() {

				var doc = window.document;
				var scrollTop = doc.body.scrollTop;
				var isEnd = _this.props.isEnd;
				// console.log(listType, isEnd);

				// 防止向上滚动也拉数据
                if (_this.prvScrollTop > scrollTop) {
                    return;
                }
                _this.prvScrollTop = scrollTop;

				var winHeight = window.document.documentElement.clientHeight;
				var clientHeight = window.document.body.clientHeight;

				// 条件一： 滚动到最底部才拉数据
				// if (scrollTop + winHeight >= clientHeight) {
				// 条件二： 滚动到中间拉数据
				if (scrollTop >= (clientHeight - winHeight) / 2 && !isEnd) {
					_this.props.loadNewsList(null, false);
				}

			}, 50); 
		});

	}

	render() {

		console.dev('render Scroll!');

		return (
			<div className="content-wrap">
			   {this.props.children}
			</div>
		);
	}
}