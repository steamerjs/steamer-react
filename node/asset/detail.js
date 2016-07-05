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

	var response = yield requestSync.requestSync({
		uri: CGI_PATH['GET_NEWS_DETAIL'],
		method: 'POST',
		form: {
			news_id: req.params.newsid
		}
	});


	const store = configureStore();

	yield store.dispatch({
        type: 'GET_NEWS_DETAIL_SUCCESS',
        data: JSON.parse(response.body),
        param:{
            news_id: req.params.newsid,
        }
    });

    let path = (process.env.NODE_ENV === '__NODE_DEV__') ? 'dist' : 'pub';
    let finalState = store.getState();
	let fileContent = require('../../' + path + '/spa.html');

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