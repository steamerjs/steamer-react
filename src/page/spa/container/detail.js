import React, { Component } from 'react';
import merge from 'lodash.merge';
import Connect from '../connect/connect';
import { 
	GET_NEWS_DETAIL 
} from '../../common/constants/cgiPath';

import Spinner from 'spinner';
import Touch from 'touch';


require('./detail.less');


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
		let keys = Object.keys(this.props.details);

		if (!keys.length) {
			this.getNewsDetail({
				id: this.newsId
			});
		}
	}

	componentWillMount() {
		
	}

	getNewsDetail(item) {
		let url = GET_NEWS_DETAIL,
			opts = {};
			
		var pa = merge({}, {
			url: item.url,
			news_id: item.id,
			v: (new Date()).getTime(),
		}, pa);

		var param = {
			param: pa,
			ajaxType: 'POST',
			localData: {
				content: '险企碰红线 监管将下手快下手狠\n\n2017-01-12 23:00:39 腾讯财经\n\n文/刘鹏\n\n进入2017年，保险业监管将保持高压状态。\n\n1月12日，2017年全国保险监管工作会议在京召开，保监会主席项俊波在会议上部署了2017年的保险业监管工作。他强调，要将“保险业姓保、保监会姓监”理念贯穿到监管工作各个方面。要打赢一场硬仗，坚决守住不发生系统性风险底线。\n\n'
			},
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
						);
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
        				this.context.router.goBack();
        				// this.context.router
        			}}>首页</Touch>
        			<Touch onTap={() => {
        				this.context.router.push('comment/' + this.commentId);
        			}}>精彩评论</Touch>
	        	</div>
	        	<Spinner isShow={this.props.spinLoading}/>
	        </div>
		);
	}
}

Detail.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Connect(Detail);