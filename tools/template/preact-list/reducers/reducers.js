/** @jsx h */
import { combineReducers } from 'redux';
import merge from 'lodash.merge';
import { setItem } from 'utils';
import initialState from '../stores/stores';
import { GET_NEWS_LIST, GET_TOP_NEWS } from '../../common/constants/cgiPath';
import { 
	GET_ARGS, TABS_UPDATE,
	TOGGLE_LIST_LOADING, 
	TOGGLE_SPIN_LOADING, 
	LIKE_NEWS, 
	DISLIKE_NEWS 
} from '../actions/actions';


var news = function(state = initialState.news, action) {

	switch(action.type) {

		case GET_TOP_NEWS + '_SUCCESS':

			if (!action.data || !action.data.idlist || action.data.idlist.length === 0) {
				return state;
			}

			var idlist = action.data.idlist,
			    newState = merge({}, state);
			
			newState.ids = merge([], idlist[0].ids);
			newState.listLatest = merge([], newState.listLatest.concat(idlist[0].newslist));

			return newState;


		case GET_NEWS_LIST + '_ON':
			var newState = merge({}, state);
			newState.listInfo['listLatest'].isLoading = true;

			return newState;

		case GET_NEWS_LIST + '_SUCCESS':

			if (!action.data || !action.data.newslist) {
				return state;
			}

			var newState = merge({}, state),
				listInfo = {
					curPage: (++newState.listInfo['listLatest'].curPage),
					isLoading: false,
				};

			newState.listInfo['listLatest'] = merge({}, newState.listInfo['listLatest'], listInfo);
			newState['listLatest'] = newState['listLatest'].concat(action.data.newslist);

			return newState;

		case GET_NEWS_LIST + '_ERROR':
			var newState = merge({}, state);
			newState.listInfo['listLatest'].isLoading = false;

			return newState;

		case LIKE_NEWS:
			if (!action.value) {
				return state;
			}

			var newState = merge({}, state),
				isDuplicate = false;

			newState['listLike'].map((item) => {
				if (item.id === action.value.id) {
					isDuplicate = true;
				}
			});

			if (isDuplicate) {
				return newState;
			}

			newState['listLike'] = newState['listLike'].concat(action.value);
			setItem('like-list', JSON.stringify(newState['listLike']));

			return newState;

		case DISLIKE_NEWS:
			if (!action.value) {
				return state;
			}

			var newState = merge({}, state);
			newState['listLike'] = newState['listLike'].filter((item) => {
				return (item.id !== action.value.id);
			});
			setItem('like-list', JSON.stringify(newState['listLike']));

			return newState;

		default:
			return state;
	}
};

var args = function(state = initialState.args, action) {
	switch(action.type) {
		case GET_ARGS:
			return merge({}, state, action.value);
		default:
			return state;
	}
};

var tabs = function(state = initialState.tabs, action) {
	switch(action.type) {
		case TABS_UPDATE:
			return action.value;
		default:
			return state;
	}
};

var listLoading = function(state = initialState.listLoading, action) {
	switch(action.type) {
		case TOGGLE_LIST_LOADING:
			return action.value;
		default:
			return state;
	}
};

var spinLoading = function(state = initialState.spinLoading, action) {
	switch(action.type) {
		case TOGGLE_SPIN_LOADING:
			return action.value;
		default:
			return state;
	}
};


const rootReducer = combineReducers({
	args,
	tabs,
	news,
	listLoading,
	spinLoading,
});

export default rootReducer;