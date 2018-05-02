import React, { Component } from 'react';
import {
    inject,
    observer
} from 'mobx-react';
import {
    action
} from 'mobx';
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

import './index.less';

@inject('news')
@inject('router')
@observer
class Wrapper extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lock: true
        };
        this.firstGetAllData = false;

        // this.loadTopNews = this.loadTopNews(this);
        // this.loadNewsList = this.loadNewsList.bind(this);
        // this.getNewsDetail = getNewsDetail.bind(this);
    }

    componentWillMount() {
        if (this.props.news.news.ids.length === 0) {
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

    // componentWillReceiveProps() {
    //     this.props.toggleSpinLoading(false);

    //     return true;
    // }

    @action.bound
    loadTopNews() {
        loadTopNews.bind(this)();
    }

    @action.bound
    loadNewsList() {
        loadNewsList.bind(this)();
    }

    @action.bound
    getNewsDetail(item) {
        getNewsDetail.bind(this)(item);
    }

    render() {
        let {
            tabs,
            news,
            args,
            likeNews,
            dislikeNews,
            details,
            updateActiveTab,
            spinLoading,
        } = this.props.news;

        let {
            router
        } = this.props;

        let tabStyle = tabs;
        let isEnd = news.listInfo['listLatest']['isEnd'];
        let isLoadingShow = tabStyle === LATEST_NEWS;

        return (
            <article className="cm-page">
                <Tab
                    tabs={tabs}
                    updateActiveTab={updateActiveTab}
                />
                <div className="cm-content">
                    <Scroll
                        ref={(scrollEle) => {
                            this.scrollEle = scrollEle;
                        }}
                        scrollContainer={document.querySelector('.cm-content')}
                        loadDataForScroll={this.loadNewsList}
                        disable={this.state.lock}
                        isHalf={true}
                        useWindow={true}
	            	>
                        <List
                            tabs={tabs}
                            tabsType={LATEST_NEWS}
                            news={news.listLatest}
                            listInfo={news.listInfo.listLatest}
                            args={args}
                            likeNews={likeNews}
                            getNewsDetail={this.getNewsDetail}
                            details={details}
                            router={router}
                        />
                        <List
                            tabs={tabs}
                            tabsType={LIKE_NEWS}
                            news={news.listLike}
                            listInfo={news.listInfo.listLike}
                            args={args}
                            dislikeNews={dislikeNews}
                            getNewsDetail={this.getNewsDetail}
                            details={details}
                            router={router}
                        />
                        <Loading isShow={isLoadingShow} isEnd={isEnd} />
                    </Scroll>
                </div>
                <Spinner isShow={spinLoading} />
            </article>
        );
    }
}

export default Wrapper;
