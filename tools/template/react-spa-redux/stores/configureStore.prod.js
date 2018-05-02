import { createStore, compose, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import {
    routerMiddleware
} from 'react-router-redux';
import rootReducer from '../reducers/reducers';
import thunk from 'redux-thunk';
import api from '../../common/middleware/api';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const reduxRouterMiddleware = routerMiddleware(history);

const finalCreateStore = compose(
    applyMiddleware(thunk, api, reduxRouterMiddleware)
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    return store;
}
