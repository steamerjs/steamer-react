export const API_REQUEST = 'API_REQUEST';
export const GET_NEWS_LIST = 'GET_NEWS_LIST';
export const GET_TOP_NEWS = 'GET_TOP_NEWS';
export const GET_COMMENT_LIST = 'GET_COMMENT_LIST';
export const GET_NEWS_DETAIL = 'GET_NEWS_DETAIL';

const baseUrl = 'http://openapi.inews.qq.com/',
	  baseUrl1 = 'http://view.inews.qq.com/',
	  baseUrl2 = 'http://localhost:9000/api/';

const CGI_PATH = {
	[GET_TOP_NEWS]: baseUrl + 'getQQNewsIndexAndItems',
	[GET_NEWS_LIST]: baseUrl + 'getQQNewsNormalContent',
	[GET_COMMENT_LIST]: baseUrl1 + 'getQQNewsComment',
	[GET_NEWS_DETAIL]: baseUrl2 + 'getQQNewsDetail',
};

export default CGI_PATH;