import IndexWrapper from '../container/index';
import CommentWrapper from '../container/comment';
import App from '../container/app';

export const routeConfig = [
    {   path: '/spa.html',
        component: App,
        indexRoute: {
            component: IndexWrapper,
        },
        childRoutes:[
        	{
        		path: '',
        		component: IndexWrapper
        	},
        	{
        		path: '/comment',
        		component: CommentWrapper,
        	}
        ]
    }
];
