import React, { Component } from 'react';
import Connect from '../connect/connect';

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

	}

	componentDidMount() {
		
	}

	componentWillMount() {
		
	}

	render() {
		var details = this.props.details || {},
			detailStr = details.hasOwnProperty(this.newsId) ? details[this.newsId] : ''; 

		console.log(detailStr);
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