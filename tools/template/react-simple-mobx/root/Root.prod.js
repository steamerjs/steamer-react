import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import store from '../stores';

import IndexWrapper from '../container/index';

export default class Root extends Component {
    render() {
        return (
            <Provider
                {...store}
            >
                <div>
                    <IndexWrapper />
                </div>
            </Provider>
        );
    }
}

render(
    <Root />,
    document.getElementById('pages')
);
