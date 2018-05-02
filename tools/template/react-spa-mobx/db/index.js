import merge from 'lodash.merge';
import request from '@/page/common/middleware/request';

export const GET_NEWS_LIST = 'GET_NEWS_LIST';
export const GET_TOP_NEWS = 'GET_TOP_NEWS';
export const GET_COMMENT_LIST = 'GET_COMMENT_LIST';
export const GET_NEWS_DETAIL = 'GET_NEWS_DETAIL';

const baseUrl = 'http://openapi.inews.qq.com/';
const baseUrl1 = 'http://view.inews.qq.com/';

export const CGI_PATH = {
    [GET_TOP_NEWS]: baseUrl + 'getQQNewsIndexAndItems',
    [GET_NEWS_LIST]: baseUrl + 'getQQNewsNormalContent',
    [GET_COMMENT_LIST]: baseUrl1 + 'getQQNewsComment',
    [GET_NEWS_DETAIL]: baseUrl1 + 'getQQNewsDetail'
};

export function loadTopNews() {
    let urlName = GET_TOP_NEWS;

    let pa = merge({}, {
        chlid: 'news_news_top',
        refer: 'mobilewwwqqcom',
        otype: 'jsonp',
        jsonCbName: 'getNewsIndexOutput',
        t: (new Date()).getTime()
    });

    this.props.news.news.listInfo.listLatest.isLoading = true;

    let param = {
        param: pa,
        url: CGI_PATH[urlName],
        ajaxType: 'JSONP',
        onSuccess: (data) => {
            if (!data.retcode) {
                let list = (data.idlist.length) ? data.idlist[0] : { ids: [], newslist: [] };
                let news = this.props.news.news;
                this.props.news.news.ids = news.ids.concat(list.ids);
                this.props.news.news.listLatest = news.listLatest.concat(list.newslist);
                this.props.news.spinLoading = false;
                this.props.news.news.listInfo.listLatest.isLoading = false;
            }
            else {
                this.props.news.spinLoading = false;
            }
        },
        onError: (res) => {
            this.props.news.spinLoading = false;
            this.props.news.news.listInfo.listLatest.isLoading = false;
        }
    };

    request(urlName, param);
}

export function loadNewsList() {
    let urlName = GET_NEWS_LIST;

    let listInfoParam = this.props.news.news.listInfo['listLatest'];
    let ids = this.props.news.news.ids;

    // 防止重复拉取
    if (listInfoParam.isLoading) {
        return;
    }

    let curPage = listInfoParam.curPage;
    let pageSize = listInfoParam.pageSize;
    let startIndex = 0 + (curPage - 1) * pageSize;
    let endIndex = startIndex + pageSize;

    let newIds = ids.slice(startIndex, endIndex);
    let newIdArray = [];

    newIds.forEach((item, index) => {
        newIdArray.push(item.id);
    });

    let pa = merge({}, {
        cmd: GET_NEWS_LIST,
        ids: newIdArray.join(','),
        refer: 'mobilewwwqqcom',
        otype: 'jsonp',
        jsonCbName: 'getNewsContentOnlyOutput',
        t: (new Date()).getTime()
    }, pa);

    this.props.news.news.listInfo.listLatest.isLoading = true;

    let param = {
        param: pa,
        url: CGI_PATH[urlName],
        ajaxType: 'JSONP',
        onSuccess: (data) => {
            if (!data.retcode || data.retcode === -1) {
                let list = (data.newslist.length) ? data.newslist : [];
                let news = this.props.news.news;
                this.props.news.news.listLatest = news.listLatest.concat(list);
                let listInfo = this.props.news.news.listInfo.listLatest;
                ++listInfo.curPage;
                listInfo.isLoading = false;
                this.props.news.news.listInfo.listLatest = listInfo;
            }
            else {
                this.props.news.spinLoading = false;
            }
        },
        onError: (res) => {
            console.log(res);
            this.props.news.spinLoading = false;
            this.props.news.news.listInfo.listLatest.isLoading = false;
        }
    };

    request(urlName, param);
}

export function getNewsDetail(item) {
    let urlName = GET_NEWS_DETAIL;

    let pa = merge({}, {
        url: item.url,
        news_id: item.id,
        v: (new Date()).getTime()
    });

    let param = {
        param: pa,
        URL: CGI_PATH[urlName],
        ajaxType: 'POST',
        localData: {
            content: '险企碰红线 监管将下手快下手狠\n\n2017-01-12 23:00:39 '
                + '腾讯财经\n\n文/刘鹏\n\n进入2017年，保险业监管将保持高压状态。'
                + '\n\n1月12日，2017年全国保险监管工作会议在京召开，保监会主席项俊波'
                + '在会议上部署了2017年的保险业监管工作。他强调，要将“保险业姓保、保监会'
                + '姓监”理念贯穿到监管工作各个方面。要打赢一场硬仗，坚决守住不发生系统性'
                + '风险底线。\n\n'
        },
        onSuccess: (data) => {
            this.props.news.details[item.id] = data.content;
        },
        onError: (res) => {
            console.log('err');
        }
    };

    request(urlName, param);
}

export function getCommentList() {
    let urlName = GET_COMMENT_LIST;

    let pa = merge({}, {
        comment_id: this.props.match.params.id,
        otype: 'jsonp',
        jsonCbName: 'renderComment',
        lcount: 20,
        from: 'share',
        v: (new Date()).getTime()
    });

    let param = {
        param: pa,
        url: CGI_PATH[urlName],
        ajaxType: 'JSONP',
        onSuccess: (data) => {
            if (!data.retcode) {
                this.props.news.comments[this.props.match.params.id] = data.comments.list;
            }
        },
        onError: (res) => {
            console.log('err');
        }
    };

    request(urlName, param);
}
