import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../stores/configureStore';

import IndexWrapper from '../container/index';
import DevTools from '../../common/devtools/DevTools';
import { DEBUG } from '../constants/constants';

let store = configureStore();

let DevToolsWrapper = (DEBUG) ? <DevTools /> : null;

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <IndexWrapper />
                    {DevToolsWrapper}
                </div>
            </Provider>
        );
    }
}

// render(
//     <Root />,
//     document.getElementById('pages')
// );
