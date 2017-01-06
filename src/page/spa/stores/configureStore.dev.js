import { createStore, compose, applyMiddleware } from 'redux';
import { 
    browserHistory,
} from 'react-router';
import { 
    routerMiddleware 
} from 'react-router-redux';
import rootReducer from '../reducers/reducers';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import DevTools from '../../common/devtools/DevTools';
// import logger from '../../common/middleware/logger';
import api from '../../common/middleware/api';
import { DEBUG } from '../constants/constants';


const reduxRouterMiddleware = routerMiddleware(browserHistory);

function getDebugSessionKey() {
    // You can write custom logic here!
    // By default we try to read the key from ?debug_session=<key> in the address bar
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : null;
}

var finalCreateStore = null;
if (DEBUG) {
    finalCreateStore = compose(
        applyMiddleware(thunk, api, reduxRouterMiddleware),
        DevTools.instrument(),
        persistState(getDebugSessionKey())
    )(createStore);
}
else {
    finalCreateStore = compose(
        applyMiddleware(thunk, api, reduxRouterMiddleware)
    )(createStore);
}

export default function configureStore(initialState) {

    const store = finalCreateStore(rootReducer, initialState);

    // Required for replaying actions from devtools to work
    // reduxRouterMiddleware.listenForReplays(store);

  	if (module.hot) {
    	// Enable Webpack hot module replacement for reducers
    	module.hot.accept('../reducers/reducers', () => {
      		const nextRootReducer = require('../reducers/reducers').default;
      		store.replaceReducer(nextRootReducer);
    	});
  	}

  	return store;
}