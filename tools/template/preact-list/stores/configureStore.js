/** @jsx h */
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/reducers';
import thunk from 'redux-thunk';
import api from '../../common/middleware/api';

const finalCreateStore = compose(
  	applyMiddleware(thunk, api)
)(createStore);

export default function configureStore(initialState) {

    const store = finalCreateStore(rootReducer, initialState);
    
  	return store;
}