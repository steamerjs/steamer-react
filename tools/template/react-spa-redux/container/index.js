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

import { withRouter } from 'react-router-dom'
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
        let {
            tabs,
            news,
            args,
            likeNews,
            dislikeNews,
            details,
            updateActiveTab,
            spinLoading,
            history
        } = this.props;

        let tabStyle = tabs,
            isEnd = news.listInfo['listLatest']['isEnd'],
            isLoadingShow = tabStyle === LATEST_NEWS;

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
                            history={history}
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
                            history={history}
                        />
                        <Loading isShow={isLoadingShow} isEnd={isEnd} />
                    </Scroll>
                </div>
                <Spinner isShow={spinLoading} />
            </article>
        );
    }
}

// Wrapper.contextTypes = {
//     router: React.PropTypes.object.isRequired
// };

export default withRouter(Connect(Wrapper));
