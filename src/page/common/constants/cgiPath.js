const baseUrl = 'http://openapi.inews.qq.com/',
	  baseUrl1 = 'http://view.inews.qq.com/';

const CGI_PATH = {
	'GET_TOP_NEWS': baseUrl + 'getQQNewsIndexAndItems',
	'GET_NEWS_LIST': baseUrl + 'getQQNewsNormalContent',
	'GET_COMMENT_LIST': baseUrl1 + 'getQQNewsComment',
};

module.exports = CGI_PATH;