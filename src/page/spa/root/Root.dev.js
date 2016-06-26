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
import DevTools from '../../common/devtools/DevTools';
import { DEBUG } from '../constants/constants';
import { routeConfig } from './route_server';

import { syncHistoryWithStore } from 'react-router-redux';
import { Router, IndexRoute, Route, browserHistory, useRouterHistory, hashHistory, match } from 'react-router';
import { createHashHistory, createHistory } from 'history';

var globalVar = (isNode) ? global : window;

let store = configureStore(globalVar.__REDUX_STATE__ || {});

let  history = syncHistoryWithStore(browserHistory, store);

var DevToolsWrapper = (DEBUG) ? <DevTools /> : null;

const { pathname, search, hash } = window.location;
const location = `${pathname}${search}${hash}`;

export default class Root extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router history={history}>
                        <Route path="/spa" component={App}>
                            <IndexRoute component={IndexWrapper}/>
                            <Route path="/spa/comment/:id" component={CommentWrapper}/>
                            <Route path="/spa/detail/:id/:commentid" component={DetailWrapper}/>
                        </Route>
                    </Router>
                    {/* <Router history={history} routes={routeConfig} /> */}
                    {DevToolsWrapper}
                </div>
            </Provider>
        );
    }
}

match({ routes: routeConfig, location: location }, () => {
    render(
        <Provider store={store}>
            <div>
                <Router routes={routeConfig} history={history} />
            </div>
        </Provider>,
        document.getElementById('pages')
    )
});

//     render(
//         <Root store={store}/>,
//         document.getElementById('pages')
//     );


