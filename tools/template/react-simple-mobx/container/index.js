import React, { Component } from 'react';
import {
    inject,
    observer
} from 'mobx-react';
import {
    action
} from 'mobx';

import './index.less';

@inject('data')
@observer
class Wrapper extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div className="wrapper">
                <div className="logo"></div>
                <h2 className="title">steamer-react</h2>
                <div className="text">Simple Mobx 模板</div>
                <div className="link">
                    <a className="icon-github" href="https://github.com/steamerjs/steamer-react" target="_blank" title="Github"></a>
                    <a className="icon-docs" href="https://steamerjs.github.io/" target="_blank" title="文档"></a>
                    <a className="icon-author" href="https://github.com/lcxfs1991" target="_blank" title="作者"></a>
                </div>
            </div>
        );
    }
}

export default Wrapper;
