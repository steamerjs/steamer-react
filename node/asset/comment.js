const vm = require('vm'),
	  React = require('react');
	  // Root = React.createFactory(require('Root').default);

var CGI_PATH = require('../config/cgiPath');
var requestSync = plugin('requestSync');

import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { configureStore } from 'configureStore';
import { match, RouterContext } from 'react-router';
import { routeConfig } from 'routes';

module.exports = function* (req, res) {
	
	let comment_id = req.params.commentid,
		otype = "jsonp",
		callback = "renderComment",
		lcount = 20,
		from = 'share',
		v = (new Date()).getTime();

	let urlParam = '?comment_id=' + comment_id + '&otype=' + otype 
					+ '&callback=' + callback + '&lcount=' + lcount
					+ '&from=' + from + '&v=' + v;


	var response = yield requestSync.ajax({
		uri: CGI_PATH['GET_COMMENT_LIST'] + urlParam,
		method: 'GET'
	});

	// console.log(JSON.stringify(response.body));

	let jsonpSandbox = vm.createContext({renderComment: function(r){return r;}});
	let jsonData = vm.runInContext(response.body, jsonpSandbox);

	// // console.log(jsonData);

	const store = configureStore();

	yield store.dispatch({
        type: 'GET_COMMENT_LIST_SUCCESS',
        data: jsonData,
        param:{
            comment_id: comment_id,
            otype: otype,
            callback: callback,
            lcount: lcount,
            from: from,
            v: v
        }
    });

    let path = (process.env.NODE_ENV === '__NODE_DEV__') ? 'dist' : 'pub';
    let finalState = store.getState();
	let fileContent = require('../../' + path + '/spa.html');

	// console.log(finalState);

	let reactHtml = "";
	match({ routes: routeConfig, location: req.url }, (error, redirectLocation, renderProps) => {
	    if (renderProps) {
	    	reactHtml = renderToString(
				<Provider store={store}>
		            <RouterContext {...renderProps} />
		        </Provider>
			);
	    } 
	    else {
	      res.body = "404";
	    }
	});

	fileContent = fileContent
				  .replace("window.isNode=false;", "window.isNode=true;")
				  .replace('<div id="pages" class="cm-page-wrap"></div>', 
				 		   '<div id="pages" class="cm-page-wrap"><div>' + reactHtml + '</div></div>'
				 		   + '<script>window.__REDUX_STATE__=' + JSON.stringify(finalState) + ';</script>');

	res.body = fileContent;
};