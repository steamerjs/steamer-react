import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '../stores/configureStore';
import { initialStore } from '../stores/stores';

import IndexWrapper from '../container/index';
import CommentWrapper from '../container/comment';
import DetailWrapper from '../container/detail';

import App from '../container/app';

import { routeConfig } from './route';

import { syncHistoryWithStore } from 'react-router-redux';
import { Router, IndexRoute, Route, browserHistory, useRouterHistory, hashHistory } from 'react-router';
import { createHashHistory } from 'history';

var globalVar = (isNode) ? global : window;

let store = configureStore(globalVar.__REDUX_STATE__ || {});

let  history = syncHistoryWithStore(browserHistory, store);

export default class Root extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router history={history}>
                        <Route path="/spa.html" component={App}>
                            <IndexRoute component={IndexWrapper}/>
                            <Route path="/spa.html/comment/:id" component={CommentWrapper}/>
                            <Route path="/spa.html/detail/:id/:commentid" component={DetailWrapper}/>
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

