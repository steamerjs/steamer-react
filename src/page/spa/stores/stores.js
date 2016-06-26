import { LATEST_NEWS, LIKE_NEWS } from '../constants/constants';

let src = null,
	listLike = [];

if (!isNode) {
	var { getHash, getItem } = require('utils');
	src = getHash('src');
	listLike = JSON.parse(getItem('like-list')) || [];
}

/** other const **/
const initialState = {
	args: {
		src: src,
	},
	tabs: LATEST_NEWS,
	news: {
		ids: [], // 新闻id
	    listLatest: [],    // 最新新闻
	    listLike: listLike, // 收藏新闻
	    listInfo: {
	        listLatest:{
	            isEnd: false,
				pageSize: 20,
				curPage: 1,
				isLoading: false,
	        },
	        listLike: {
	        	isEnd: false,
				pageSize: 20,
				curPage: 1,
				isLoading: false,
	        }
	    },
	},
	details: {

	},
	comments: {
		
	},
	listLoading: false,
	spinLoading: true
};


export default initialState;