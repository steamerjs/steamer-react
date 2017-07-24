import * as React from 'react';
import './index.less';
// var style = require('./hello.css');

interface HelloProps {
    name: string;
}

class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

export default Hello;