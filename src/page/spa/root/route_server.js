import IndexWrapper from '../container/index';
import CommentWrapper from '../container/comment';
import DetailWrapper from '../container/detail';
import App from '../container/app';

export const routeConfig = [
    {   path: '/spa',
        component: App,
        indexRoute: {
            component: IndexWrapper,
        },
        childRoutes:[
        	{
        		path: '/spa/detail/:id/:commentid',
        		component: DetailWrapper
        	},
        	{
        		path: '/spa/comment/:id',
        		component: CommentWrapper,
        	}
        ]
    }
];

// export const routeConfig = {
//     path: '/spa/',
//     component: App,
//     indexRoute: {
//         component: IndexWrapper
//     }
// };
