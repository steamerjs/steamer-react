import React, { Component, PropTypes } from 'react';
import merge from 'lodash.merge';
import { render } from 'react-dom';
import { formatDate } from 'utils';
import Connect from '../connect/connect';
import { GET_COMMENT_LIST } from '../../common/constants/constants';
import { LATEST_NEWS, LIKE_NEWS } from '../constants/constants';

import Spinner from 'spinner';
import Touch from 'touch';


require('./comment.scss');


class Comment extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			
		};
		this.commentId = this.props.params.id;

	}

	componentDidMount() {
		
	}

	componentWillMount() {
		if (!this.props.comments.hasOwnProperty(this.commentId)) {
			this.getCommentList();
		}
	}

	getCommentList() {
		let url = GET_COMMENT_LIST,
			opts = {};

		var pa = merge({}, {
			comment_id: this.props.params.id,
			otype: "jsonp",
			callback: "renderComment",
			lcount: 20,
			from: 'share',
			v: (new Date()).getTime(),
		}, pa);

		var param = {
			param: pa,
			ajaxType: 'JSONP',
			onSuccess: function(data) {
				// console.log(data);
			},
			onError: function(res) {
				console.log("err");
			}
		};

		this.props.request(url, param, opts);
	}

	render() {
		var commentId = this.commentId;
		var commentData = (this.props.comments.hasOwnProperty(commentId)) ? 
						  this.props.comments[commentId] : [];

		var commentList = commentData.map((items, index) => {
			let item = items[0];

			return (
				<div key={index} className="comment-list_item">
        			<div className="item">
        				<div className="avatar">
        					<img src={item.head_url} />
        				</div>
        				<div className="nameBar">
        					{item.nick}
        					<span>{formatDate(item.pub_time, 2)}</span>
        				</div>
        				<div className="contentBox">
        					<p>{item.reply_content}</p>
        				</div>
        			</div>
        		</div>
			)
		});

		commentList = (!commentList.length) ? <div>暂时评论</div> : commentList;

		return (
	        <div className="comment-wrapper">
	        	<div className="comment-list">
	        		<h1>
	        			精选评论
	        			<Touch onTap={() => {
	        				this.context.router.goBack();
	        				// this.context.router
	        			}}><div className="back">返回</div></Touch>
	        		</h1>
	        		
	        		<div className="comment-list_item">
	        			{commentList}
	        		</div>
	        	</div>
	        	<Spinner isShow={this.props.spinLoading}/>
	        </div>
		)
	}
}

Comment.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Connect(Comment);