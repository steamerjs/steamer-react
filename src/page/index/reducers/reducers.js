import { combineReducers } from 'redux';
import initialState from '../stores/stores';
import {} from 'page/common/constants/cgiPath';
import {} from '../actions/actions';

let data = function(state = initialState.data, action) {
    switch (action.type) {
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    data
});

export default rootReducer;