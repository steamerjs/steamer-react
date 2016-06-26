import React, { Component, PropTypes } from 'react';
import merge from 'lodash.merge';
import { render } from 'react-dom';
import { formatDate } from 'utils';
import Connect from '../connect/connect';
import { GET_COMMENT_LIST, GET_NEWS_DETAIL } from '../../common/constants/constants';
import { LATEST_NEWS, LIKE_NEWS } from '../constants/constants';

import Spinner from 'spinner';
import Touch from 'touch';

require('./detail.scss');

let spaPath = "";
if ("__DEV__" === process.env.NODE_ENV || "__PROD__" === process.env.NODE_ENV) {
	spaPath = "spa.html";
}
else {
	spaPath = "spa";
}

class Detail extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			
		};
		this.newsId = this.props.params.id;
		this.commentId = this.props.params.commentid;
		this.getNewsDetail = this.getNewsDetail.bind(this);
	}

	componentDidMount() {
		if (!this.props.details.hasOwnProperty(this.newsId)) {
			this.getNewsDetail(this.newsId);
		}
	}

	componentWillMount() {
		
	}

	getNewsDetail(newsId) {
		let url = GET_NEWS_DETAIL,
			opts = {};

		var pa = merge({}, {
			// url: item.url,
			news_id: newsId,//item.id,
			v: (new Date()).getTime(),
		}, pa);

		var param = {
			param: pa,
			ajaxType: 'POST',
			onSuccess: function(data) {
				
			},
			onError: function(res) {
				console.log("err");
			}
		};

		this.props.request(url, param, opts);
	}

	render() {
		var details = this.props.details || {},
			detailStr = details.hasOwnProperty(this.newsId) ? details[this.newsId] : ''; 

		// console.dev(detailStr);
		var detailContent = detailStr.split('\n\n').map((item, index) => {
			// console.log(item);
			switch (index) {
				case 0:
					return (
						<p key={index} className="title">{item}</p>
					);
				case 1:
					return (
						<p key={index} className="src">{item}</p>
					);
				default:

					var regex = new RegExp('(\[http:\/\/(\w.+)\])', 'i');
					var matches = item.match(regex);
					// console.log(matches);
					if (matches !== null && !!~matches.input.indexOf("\[http://")) {
						// console.log(item);
						return (
							<p key={index} className="imgNode">
								<img src={item.replace("\[", "").replace("\]", "")} />
							</p>
						)
					}
					else {
						return (
							<p key={index} className="text">{item}</p>
						);
					}
			}
		});

		return (
	        <div className="detail-wrapper">
	        	{detailContent}
	        	<div className="btns">
	        		<Touch onTap={() => {
        				// this.context.router.goBack();
        				this.context.router.push('/' + spaPath);
        				// this.context.router
        			}}>首页</Touch>
        			<Touch onTap={() => {
        				this.context.router.push('/' + spaPath + '/comment/' + this.commentId);
        			}}>精彩评论</Touch>
	        	</div>
	        	<Spinner isShow={this.props.spinLoading}/>
	        </div>
		)
	}
}

Detail.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Connect(Detail);