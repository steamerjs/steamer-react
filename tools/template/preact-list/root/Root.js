/** @jsx h */
if ("__PROD__" !== process.env.NODE_ENV) {
	window.console.dev = function(msg) {
		console.log(msg);
	};
}
else {
	window.console.dev = function(msg) {};
}

import Preact, { h, render, Component } from 'preact';
import { Provider } from 'preact-redux';
import configureStore from '../stores/configureStore';

import IndexWrapper from '../container/index';

let store = configureStore();

export default class Root extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Provider store={store}>
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


