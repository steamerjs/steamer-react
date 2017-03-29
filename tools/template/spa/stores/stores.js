import { getItem, getHash } from 'utils';
import { 
	LATEST_NEWS 
} from '../../common/constants';

/** other const **/
const initialState = {
	args: {
		src: getHash('src'),
	},
	tabs: LATEST_NEWS,
	news: {
		ids: [], // 新闻id
	    listLatest: [],    // 最新新闻
	    listLike: JSON.parse(getItem('like-list')) || [], // 收藏新闻
	    listInfo: {
	    	listLatest: {
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