import { createStore, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/reducers';
import thunk from 'redux-thunk';
import logger from '../../common/middleware/logger';
import api from '../../common/middleware/api';

const reduxRouterMiddleware = routerMiddleware(browserHistory);

const finalCreateStore = compose(
  	applyMiddleware(thunk, api, reduxRouterMiddleware)
)(createStore);

export function configureStore(initialState) {

    const store = finalCreateStore(rootReducer, initialState);
    
  	return store;
}