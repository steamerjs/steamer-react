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

    let path = (process.env.NODE_ENV === '__NODE_DEV__') ? 'src' : 'pub';
    let finalState = store.getState();
	let fileContent = require('../../' + path + '/spa.html');

	// let reactHtml = renderToString(
	// 	<Provider store={store}>
 //            <div>
 //                <Router history={history}>
 //                    <RouterContext />
 //                </Router>
 //            </div>
 //        </Provider>
	// );
	// console.log(req.url);
	// console.log(routeConfig);
	let reactHtml = "";
	match({ routes: routeConfig, location: req.url }, (error, redirectLocation, renderProps) => {
		// console.log(error);
		// console.log(redirectLocation);
		// console.log(renderProps);
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