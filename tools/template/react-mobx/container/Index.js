import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Test from '../components/Test.js';

import './Index.less';

@inject('store')
@observer
export default class Page extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="wrapper">
                Hello world
                <Test/>    
            </div>
        );
    }
}
