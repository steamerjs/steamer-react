import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import store from '../stores';

import createBrowserHistory from 'history/createBrowserHistory';
import {
    syncHistoryWithStore
} from 'mobx-react-router';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';

import Loadable from 'react-loadable';
import IndexWrapper from '../container/index';
import Spinner from 'react-spin-component';


// import App from '../container/app';
import DevTools from 'mobx-react-devtools';
import { DEBUG } from '../constants/constants';

const browserHistory = createBrowserHistory();
const routingStore = store.router;
const history = syncHistoryWithStore(browserHistory, routingStore);

let DevToolsWrapper = (DEBUG) ? <DevTools /> : null;

const LoadableDetail = Loadable({
    loader: () => import('../container/detail'),
    loading() {
        return <Spinner isShow={true} />;
    }
});

const LoadableComment = Loadable({
    loader: () => import('../container/comment'),
    loading() {
        return <Spinner isShow={true} />;
    }
});

export default class Root extends Component {
    render() {
        return (
            <Provider
                {...store}
            >
                <div>
                    {DevToolsWrapper}
                    <Router
                        history={history}
                    >
                        <div>
                            <Route exact path="/" component={IndexWrapper} />
                            <Route exact path="/detail/:id/:commentid" component={LoadableDetail} />
                            <Route exact path="/comment/:id" component={LoadableComment} />
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

// render(
//     <Root />,
//     document.getElementById('pages')
// );
