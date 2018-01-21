import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Tab from '../components/Tab.js';

import './Index.css';

@inject('store')
@observer
export default class Page extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div className="wrapper">
                Hello world
                <Tab />
            </div>
        );
    }
}
