import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/reducers';
import thunk from 'redux-thunk';
import logger from 'page/common/middleware/logger';
import api from 'page/common/middleware/api';

const finalCreateStore = compose(
    applyMiddleware(thunk, api, logger)
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);
    return store;
}
