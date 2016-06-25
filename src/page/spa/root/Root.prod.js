import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '../stores/configureStore';
import initialStore from '../stores/stores';

import IndexWrapper from '../container/index';

var globalVar = (isNode) ? global : window;
globalVar['console'].dev = function(msg) {};

let store = configureStore();

export default class Root extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let state = (this.props.store) ? this.props.store : store;
        return (
            <Provider store={state}>
                <div>
                    <IndexWrapper />
                </div>
            </Provider>
        );
    }
}

if (!isNode) {
    render(
        <Root />,
        document.getElementById('pages')
    );
}

