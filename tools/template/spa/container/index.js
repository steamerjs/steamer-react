import React, { Component } from 'react';
import Connect from '../connect/connect';
import {
    loadTopNews,
    getNewsDetail,
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

import './index.css';

class Wrapper extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lock: true
        };
        this.firstGetAllData = false;

        this.loadTopNews = loadTopNews.bind(this);
        this.loadNewsList = loadNewsList.bind(this);
        this.getNewsDetail = getNewsDetail.bind(this);
    }

    componentWillMount() {
        if (this.props.news.ids.length === 0) {
            this.loadTopNews();
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                lock: false
            });
        }, 100);
    }

    componentWillReceiveProps() {
        this.props.toggleSpinLoading(false);

        return true;
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
                        ref="scroll"
                        loadDataForScroll={this.loadNewsList}
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
                <Spinner isShow={this.props.spinLoading} />
            </article>
        );
    }
}

Wrapper.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Connect(Wrapper);
