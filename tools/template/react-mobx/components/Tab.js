import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class Tab extends Component {
    componentDidMount() {
        let {
            store
        } = this.props;

        setTimeout(() => {
            store.setMsg('2333');
        }, 2000);
    }

    render() {
        let { store } = this.props;

        return (
            <div className="name">Tab{store.msg}</div>
        );
    }
}
