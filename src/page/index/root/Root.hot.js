import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import App from './Root.dev';

const rootEl = document.getElementById('pages');

render(
	<AppContainer>
    	<App />
  	</AppContainer>,
  	rootEl
);

if (module.hot) {
	module.hot.accept('./Root.dev', () => {
    	// If you use Webpack 2 in ES modules mode, you can
    	// use <App /> here rather than require() a <NextApp />.
    	const NextApp = require('./Root.dev').default;
    	render(
	      	<AppContainer>
	        	<NextApp />
	      	</AppContainer>,
	      	rootEl
    	);
  	});
}