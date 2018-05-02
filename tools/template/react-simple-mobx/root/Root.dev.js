import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import store from '../stores';

import IndexWrapper from '../container/index';

import DevTools from 'mobx-react-devtools';
import { DEBUG } from '../constants/constants';

let DevToolsWrapper = (DEBUG) ? <DevTools /> : null;

export default class Root extends Component {
    render() {
        return (
            <Provider
                {...store}
            >
                <div>
                    {DevToolsWrapper}
                    <IndexWrapper />
                </div>
            </Provider>
        );
    }
}

// render(
//     <Root />,
//     document.getElementById('pages')
// );
