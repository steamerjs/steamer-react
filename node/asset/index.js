const vm = require('vm'),
	  React = require('react'),
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

	// console.log(JSON.stringify(response.body));

	let jsonpSandbox = vm.createContext({getNewsIndexOutput: function(r){return r;}});
	let jsonData = vm.runInContext(response.body, jsonpSandbox);

	// console.log(jsonData);

	const store = configureStore();

	yield store.dispatch({
        type: 'GET_TOP_NEWS_SUCCESS',
        data: jsonData,
        param:{
            chlid: chlid,
            refer: refer,
            otype: otype,
            callback: callback,
            t: t
        }
    });

    // let state = store.getState();

	let fileContent = require('../../pub/spa.html');

	let reactHtml = ReactDOMServer.renderToString(Root({store}));

	fileContent = fileContent
				  .replace("window.isNode=false;", "window.isNode=true;")
				  .replace('<div id="pages" class="cm-page-wrap"></div>', 
				 		   '<div id="pages" class="cm-page-wrap">' + reactHtml + '</div>');

	res.body = fileContent;
};