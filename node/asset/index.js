const React = require('react'),
	  ReactDOMServer = require('react-dom/server'),
	  Root = React.createFactory(require('Root').default);

import { configureStore } from 'configureStore';
	  

var CGI_PATH = require('../config/cgiPath');
var requestSync = plugin('requestSync');

module.exports = function* (req, res) {

	let chlid = 'news_news_top',
		refer = 'mobilewwwqqcom',
		otype = 'jsonp',
		callback = 'getNewsIndexOutput',
		t = (new Date()).getTime();

	let urlParam = '?chlid=' + chlid + '&refer=' + refer 
					+ '&otype=' + otype + '&callback=' + callback
					+ '&=t' + t;


	var response = yield requestSync.requestSync({
		uri: CGI_PATH['GET_TOP_NEWS'] + urlParam,
		method: 'GET'
	});

	 const store = configureStore();

	 yield store.dispatch({
        type: 'GET_NEWS_LIST_SUCCESS',
        data: response.body,
        param:{
            chlid: chlid,
            refer: refer,
            otype: otype,
            callback: callback,
            t: t
        }
    });

	console.log(__dirname);
	let fileContent = require('../../pub/spa.html');

	let reactHtml = ReactDOMServer.renderToString(Root({store}));


	res.body = fileContent;
};