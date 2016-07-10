import { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '../stores/configureStore';
import initialStore from '../stores/stores';

import IndexWrapper from '../container/index';
import CommentWrapper from '../container/comment';
import DetailWrapper from '../container/detail';

import App from '../container/app';

import { syncHistoryWithStore } from 'react-router-redux';

import { Router, IndexRoute, Route, browserHistory, useRouterHistory, hashHistory } from 'react-router';
import { createHashHistory } from 'history';

let store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

export default class Root extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router history={history}>
                        <Route path="/" component={App}>
                            <IndexRoute component={IndexWrapper}/>
                            <Route path="comment/:id" component={CommentWrapper}/>
                            <Route path="detail/:id/:commentid" component={DetailWrapper}/>
                        </Route>
                    </Router>
                </div>
            </Provider>
        );
    }
}

render(
    <Root />,
    document.getElementById('pages')
);


