import merge from 'lodash.merge';

export const GET_NEWS_LIST = 'GET_NEWS_LIST';
export const GET_TOP_NEWS = 'GET_TOP_NEWS';
export const GET_COMMENT_LIST = 'GET_COMMENT_LIST';
export const GET_NEWS_DETAIL = 'GET_NEWS_DETAIL';

const baseUrl = 'http://openapi.inews.qq.com/',
    baseUrl1 = 'http://view.inews.qq.com/';

export const CGI_PATH = {
    [GET_TOP_NEWS]: baseUrl + 'getQQNewsIndexAndItems',
    [GET_NEWS_LIST]: baseUrl + 'getQQNewsNormalContent',
    [GET_COMMENT_LIST]: baseUrl1 + 'getQQNewsComment',
    [GET_NEWS_DETAIL]: baseUrl1 + 'getQQNewsDetail'
};

export function loadTopNews() {
    let urlName = GET_TOP_NEWS,
        opts = {};

    let pa = merge({}, {
        chlid: 'news_news_top',
        refer: 'mobilewwwqqcom',
        otype: 'jsonp',
        jsonCbName: 'getNewsIndexOutput',
        t: (new Date()).getTime()
    });

    let param = {
        param: pa,
        url: CGI_PATH[urlName],
        ajaxType: 'JSONP',
        onSuccess: (data) => {

        },
        onError: (res) => {

        }
    };

    this.props.request(urlName, param, opts);
}

export function loadNewsList() {
    let urlName = GET_NEWS_LIST,
        opts = {};

    let listInfoParam = this.props.news.listInfo['listLatest'],
        ids = this.props.news.ids;

    // 防止重复拉取
    if (listInfoParam.isLoading) {
        return;
    }

    let curPage = listInfoParam.curPage,
        pageSize = listInfoParam.pageSize,
        startIndex = 0 + (curPage - 1) * pageSize,
        endIndex = startIndex + pageSize;

    let newIds = ids.slice(startIndex, endIndex),
        newIdArray = [];

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

    let param = {
        param: pa,
        url: CGI_PATH[urlName],
        ajaxType: 'JSONP',
        onSuccess: (data) => {

        },
        onError: (res) => {

        }
    };

    this.props.request(urlName, param, opts);
}

export function getNewsDetail(item) {
    let urlName = GET_NEWS_DETAIL,
        opts = {};

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

        },
        onError: (res) => {
            console.log('err');
        }
    };

    this.props.request(urlName, param, opts);
}

export function getCommentList() {
    let urlName = GET_COMMENT_LIST,
        opts = {};

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
            // console.log(data);
        },
        onError: (res) => {
            console.log('err');
        }
    };

    this.props.request(urlName, param, opts);
}
