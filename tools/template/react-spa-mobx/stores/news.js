import {
    getItem,
    getHash,
    setItem,
} from 'sutils';
import {
    observable,
    computed,
    action
} from 'mobx';
import {
    LATEST_NEWS
} from '../constants/constants';

export default class News {

    @observable tabs = LATEST_NEWS;

    @observable args = getHash('src');

    @observable news = {
        ids: [], // 新闻id
        listLatest: [], // 最新新闻
        listLike: JSON.parse(getItem('like-list')) || [], // 收藏新闻
        listInfo: {
            listLatest: {
                isEnd: false,
                pageSize: 20,
                curPage: 1,
                isLoading: false
            },
            listLike: {
                isEnd: false,
                pageSize: 20,
                curPage: 1,
                isLoading: false
            }
        }
    };

    @observable listLoading = false;
    @observable spinLoading = true;
    @observable details = {};
    @observable comments = {};

    @action.bound
    updateActiveTab(tab) {
        this.tabs = tab;
    }

    @action.bound
    likeNews(item) {
        let isDuplicate = false;
        this.news.listLike.map((news) => {
            if (item.id === news.id) {
                isDuplicate = true;
            }
            return news;
        });

        if (isDuplicate) {
            return;
        }

        this.news.listLike = this.news.listLike.concat(item);
        setItem('like-list', JSON.stringify(this.news.listLike));
    }

    @action.bound
    dislikeNews(item) {
        this.news.listLike = this.news.listLike.filter((news) => {
            return (item.id !== news.id);
        });
        setItem('like-list', JSON.stringify(this.news.listLike));
    }
}
