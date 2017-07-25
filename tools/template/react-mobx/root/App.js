import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';
import Page from '../container/Index.js'
import DevTools from 'mobx-react-devtools'
import { useStrict } from 'mobx';

import stores from '../stores';

useStrict(true);

// var DevToolsWrapper = (DEBUG) ? <DevTools /> : null;

const devPosition = {
	left: 0,
	bottom: 0
};

@observer
export default class Root extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let dev = process.env.NODE_ENV != 'production' ? (
            <DevTools position={ devPosition }/>
        ) : null;

        return (
            <Provider {...stores}>
            	<div>
	                <Page/>
	                { dev }
                </div>
            </Provider>
        );
    }
}
