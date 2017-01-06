import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import classnames from 'classnames';
import { 
	LATEST_NEWS
} from '../../constants/constants';

import Touch from 'touch';

require('./index.less');

@pureRender
export default class List extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			activeDelHwId: null,
			activeDelBubbleHwId: null
		};
		this.jumpToDetail = this.jumpToDetail.bind(this);
		this.showLikeBtn = this.showLikeBtn.bind(this);
		this.hideLikeBtn = this.hideLikeBtn.bind(this);
		this.isClickOnBtn = false;  // 是否点击在修改、删除按钮上
		this.like = this.like.bind(this);
		this.dislike = this.dislike.bind(this);
	}

	componentWillMount() {
		
	}

	componentDidMount() {
		window.addEventListener('touchstart', this.hideLikeBtn(), false);
	}

	componentWillUnmount() {
		window.removeEventListener('touchstart', this.hideLikeBtn(), false);
	}

	jumpToDetail(item) {
		return (e) => {
			if (!this.isClickOnBtn) {
            	window.location.href = item.url;
			}
		};
	}

	renderNewsIcon(pic) {
		return {
			"backgroundImage": "url(" + pic + ")",
            "backgroundSize": "100%"
		};
	}

	showLikeBtn(item, e) {
		return (e) => {
			e.preventDefault();

	        this.setState({
	        	activeNewsId: item.id
	        });
	    };
	}

    hideLikeBtn(e) {
    	return (e) => {

			if (this.state.activeNewsId === null) {
				return;
			}

			this.setState({
				activeNewsId: null,
			});
		};
    }

    like(item) {
    	return (e) => {
    		this.isClickOnBtn = true;
	    	this.props.likeNews(item);
	    	setTimeout(() => {
	    		this.hideLikeBtn(e);
	    		this.isClickOnBtn = false;
	    	}, 20);
	    };
    }

    dislike(item) {
    	return (e) => {
    		this.isClickOnBtn = true;
	    	this.props.dislikeNews(item);
	    	setTimeout(() => {
	    		this.hideLikeBtn(e);
	    		this.isClickOnBtn = false;
	    	}, 20);
	    };
    }

	render() {

		console.dev('render List!!');

		let news = this.props.news;
		let tabsType = this.props.tabsType;
		
		this.listData = news;
		
		let list = news.map((item, index) => {
			return (
				<li key={index + tabsType} className={classnames('item ui-border-1px', {'active-like': this.state.activeNewsId === item.id})}>
			    	<Touch  className="item-inner" onSwipeLeft={this.showLikeBtn(item)} onTap={this.jumpToDetail(item)}>
				    	<div className={"icon "} style={this.renderNewsIcon(item.thumbnails[0])}></div>
				    	<div className="info-wrap clearfix">
				    		<div className="info-left">
				    			<div className="info-name">
		                            <div className="info-name-text">{item.title}</div>
		                        </div>
				    			<p className="info-content">{item.des}</p>
				    		</div>
				    	</div>
		                <Touch onTap={(tabsType === LATEST_NEWS) ? this.like(item) : this.dislike(item)} 
		                		className={classnames((tabsType === LATEST_NEWS) ? "like-btn" : 'dislike-btn')}>
		                		{(tabsType === LATEST_NEWS) ? "收藏" : "取消"}
		                </Touch>
	                </Touch>
			    </li>
			);
		});

		let wrapperStyle = {
			display: (this.props.tabs === tabsType) ? "block" : "none",
			paddingTop: 46,
		};

		return (
			<div className="news-list" style={wrapperStyle}>
				<div>
					<ul>
						{list}
					</ul>
				</div>
			</div>
		);
	}
}