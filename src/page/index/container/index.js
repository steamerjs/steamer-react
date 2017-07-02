import React, { Component } from 'react';
import Connect from '../connect/connect';
import { 
	loadTopNews,
	loadNewsList,
} from '../db';
import { 
	LATEST_NEWS, 
	LIKE_NEWS 
} from '../constants/constants';

import Scroll from 'scroll';
import Spinner from 'react-spin-component';
import List from '../components/list/index';
import Tab from '../components/tab/index';
import Loading from '../components/loading/index';

import './index.less';

class Wrapper extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			
		};
		this.firstGetAllData = false;
		this.loadTopNews = this.loadTopNews.bind(this);
		this.loadNewsList = this.loadNewsList.bind(this);
		this.loadDataForScroll = this.loadDataForScroll.bind(this);
	}

	componentDidMount() {
		
	}

	componentWillMount() {
		this.loadTopNews();
	}

	componentWillReceiveProps(nextProps) {
		this.props.toggleSpinLoading(false);
		
		return true;
	}

	loadDataForScroll() {
		this.loadNewsList();
	}

	loadTopNews() {
		loadTopNews.bind(this)();
	}

	loadNewsList() {
		loadNewsList.bind(this)();

	}

	render() {
		console.dev('render container!!!!');
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
	            			ref="scroll"
	            			loadDataForScroll={this.loadDataForScroll}
	            	>
	            		<List 
							  tabs={this.props.tabs}
							  tabsType={LATEST_NEWS}
							  news={this.props.news.listLatest}
							  listInfo={this.props.news.listInfo.listLatest}
							  args={this.props.args}
							  request={this.props.request}
							  likeNews={this.props.likeNews}
	            		/>
						<List 
							  tabs={this.props.tabs}
							  tabsType={LIKE_NEWS}
							  news={this.props.news.listLike}
							  listInfo={this.props.news.listInfo.listLike}
							  args={this.props.args}
							  request={this.props.request}
							  dislikeNews={this.props.dislikeNews}
						/>
						<Loading isShow={isLoadingShow} isEnd={isEnd} />
	            	</Scroll>
	            </div>
	            <Spinner isShow={this.props.spinLoading}/>
	        </article>
		);
	}
}

export default Connect(Wrapper);