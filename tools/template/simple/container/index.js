import React, { Component } from 'react';
import Connect from '../connect/connect';

import './index.less';

class Wrapper extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div>hello world</div>
        );
    }
}

export default Connect(Wrapper);
