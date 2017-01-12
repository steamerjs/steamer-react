import React, { Component } from 'react';
import merge from 'lodash.merge';
import Connect from '../connect/connect';
import { 
	GET_NEWS_LIST, 
	GET_TOP_NEWS, 
	GET_NEWS_DETAIL 
} from '../../common/constants/cgiPath';
import { 
	LATEST_NEWS, 
	LIKE_NEWS 
} from '../constants/constants';

import Scroll from 'scroll';
import Spinner from 'spinner';
import List from '../components/list/index';
import Tab from '../components/tab/index';
import Loading from '../components/loading/index';

require('./index.less');


class Wrapper extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			lock: true
		};
		this.firstGetAllData = false;
		this.loadTopNews = this.loadTopNews.bind(this);
		this.loadNewsList = this.loadNewsList.bind(this);
		this.loadData = this.loadData.bind(this);
		this.loadDataForScroll = this.loadDataForScroll.bind(this);
		this.getNewsDetail = this.getNewsDetail.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				lock: false,
			});
		}, 100);
	}

	componentWillMount() {
		if (this.props.news.ids.length === 0) {
			this.loadTopNews();
		}
	}

	componentWillReceiveProps() {
		this.props.toggleSpinLoading(false);
		
		return true;
	}

	loadDataForScroll() {
		this.loadNewsList(null);
	}

	loadTopNews() {
		var url = GET_TOP_NEWS,
			opts = {};

		var pa = merge({}, {
			chlid: 'news_news_top',
			refer: 'mobilewwwqqcom',
			otype: 'jsonp',
			jsonCbName: 'getNewsIndexOutput',
			t: (new Date()).getTime()
		}, pa);

		var param = {
			param: pa,
			ajaxType: 'JSONP',
			onSuccess: function(res) {
				// console.log(res);
			},
			onError: function(res) {
				// console.log(res);
				// alert(res.errMsg || '加载新闻列表失败，请稍后重试');
			}
		};

		this.props.request(url, param, opts);
	}

	loadNewsList(props) {
		var props = props || this.props;

		this.loadData(LATEST_NEWS, {});
	}

	//http://mat1.gtimg.com/www/mobi/image/loadimg.png

	loadData(listType, pa = {}, opts = {}) {
		var url = GET_NEWS_LIST;

		var listInfoParam = this.props.news.listInfo['listLatest'],
			ids = this.props.news.ids;

		// 防止重复拉取
		if (listInfoParam.isLoading) {
			return;
		}

		var curPage = listInfoParam.curPage,
			page_size = listInfoParam.pageSize,
			startIndex = 0 + (curPage) * page_size,
			endIndex = startIndex + page_size;

		var newIds = ids.slice(startIndex, endIndex),
			newIdArray = [];


		newIds.forEach((item) => {
			newIdArray.push(item.id);
		});

		var pa = merge({}, {
			cmd: GET_NEWS_LIST,
			ids: newIdArray.join(','),
			refer: "mobilewwwqqcom",
			otype: "jsonp",
			jsonCbName: "getNewsContentOnlyOutput",
			t: (new Date()).getTime(),
		}, pa);

		var param = {
			param: pa,
			ajaxType: 'JSONP',
			onSuccess: function(data) {
				// console.log(data);
			},
			onError: function() {
				// console.log("err");
				// console.log(res);
				// alert(res.errMsg || '加载新闻列表失败，请稍后重试');
			}
		};

		this.props.request(url, param, opts);
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
		console.dev('render container!!!');
		let tabStyle = this.props.tabs,
			isEnd = this.props.news.listInfo['listLatest']['isEnd'],
			isLoadingShow = tabStyle === LATEST_NEWS;

		return (
	        <article className="cm-page">
	        	<Tab
	        		tabs={this.props.tabs}
	        		updateActiveTab={this.props.updateActiveTab}
	        	/>
	            <div className="cm-content">
	            	<Scroll 
	            			wrapper={".content-wrap"}
	            			ref="scroll"
	            			loadDataForScroll={this.loadDataForScroll}
	            			disable={this.state.lock}
	            	>
	            		<List 
							  tabs={this.props.tabs}
							  tabsType={LATEST_NEWS}
							  news={this.props.news.listLatest}
							  listInfo={this.props.news.listInfo.listLatest}
							  args={this.props.args}
							  likeNews={this.props.likeNews}
							  getNewsDetail={this.getNewsDetail}
							  details={this.props.details}
						/>
						<List 
							  tabs={this.props.tabs}
							  tabsType={LIKE_NEWS}
							  news={this.props.news.listLike}
							  listInfo={this.props.news.listInfo.listLike}
							  args={this.props.args}
							  dislikeNews={this.props.dislikeNews}
							  getNewsDetail={this.getNewsDetail}
							  details={this.props.details}
						/>
						<Loading isShow={isLoadingShow} isEnd={isEnd} />
	            	</Scroll>
	            </div>
	            <Spinner isShow={this.props.spinLoading}/>
	        </article>
		);
	}
}

Wrapper.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Connect(Wrapper);