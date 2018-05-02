/** @jsx h */
import Preact, { h, Component } from 'preact';
// import pureRender from 'pure-render-decorator';

import './index.less';

// @pureRender
export default class Loading extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        console.dev('render Loading');

        let isShow = this.props.isShow || false;
        let loadingStyle = {
            display: (isShow) ? 'block' : 'none'
        };

        let isEnd = this.props.isEnd || false;
        let loadingText = (isEnd) ? '已加载全部' : '正在加载中…';

        return (
            <div className="loading" style={loadingStyle}>
                <p>{loadingText}</p>
            </div>
        );
    }
}
