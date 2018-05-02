import News from './news';
import {
    RouterStore
} from 'mobx-react-router';

export default {
    news: new News(),
    router: new RouterStore()
};
