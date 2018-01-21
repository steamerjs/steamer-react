import { combineReducers } from 'redux';
import initialState from '../stores/stores';

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
