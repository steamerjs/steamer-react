/*
 * action types
 */

// OTHERS
export const GET_ARGS = 'GET_ARGS';


export const TOGGLE_SPIN_LOADING = 'TOGGLE_SPIN_LOADING';
export const TOGGLE_LIST_LOADING = 'TOGGLE_LIST_LOADING';

export const TABS_UPDATE = 'TABS_UPDATE';

export const LIKE_NEWS = 'LIKE_NEWS';
export const DISLIKE_NEWS = 'DISLIKE_NEWS';

/*
 * other constants
 */


/*
 * action creators
 */

export function getArgs(value) {
    return { type: GET_ARGS, value };
}

export function toggleListLoading(value) {
    return { type: TOGGLE_LIST_LOADING, value };
}

export function toggleSpinLoading(value) {
    return { type: TOGGLE_SPIN_LOADING, value };
}

export function updateActiveTab(value) {
	return { type: TABS_UPDATE, value};
}

export function likeNews(value) {
	return { type: LIKE_NEWS, value };
}

export function dislikeNews(value) {
	return { type: DISLIKE_NEWS, value };
}