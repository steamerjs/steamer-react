import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/reducers';
import thunk from 'redux-thunk';
import api from 'page/common/middleware/api';
import { persistState } from 'redux-devtools';
import DevTools from 'page/common/devtools/DevTools';
import { DEBUG } from '../constants/constants';

// temporarily fix redux-devtool issue
const reduxModule = require('redux');
reduxModule.__DO_NOT_USE__ActionTypes.INIT = '@@redux/INIT';
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/REPLACE';

function getDebugSessionKey() {
    // You can write custom logic here!
    // By default we try to read the key from ?debug_session=<key> in the address bar
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);

    return (matches && matches.length > 0) ? matches[1] : null;
}

let finalCreateStore = null;

if (DEBUG) {
    finalCreateStore = compose(
        applyMiddleware(thunk, api),
        DevTools.instrument(),
        persistState(getDebugSessionKey())
    )(createStore);
}
else {
    finalCreateStore = compose(
        applyMiddleware(thunk, api)
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
