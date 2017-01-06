/** @jsx h */
import Preact, { h, Component } from 'preact';
// import pureRender from 'pure-render-decorator';

require('./index.less');

// @pureRender
export default class List extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			
		};
	}

	componentWillMount() {

	}

	componentDidMount() {

	}

	render() {

		console.dev('render Loading');

		var isShow = this.props.isShow || false;
		var loadingStyle = {
			display: (isShow) ? 'block' : 'none'
		};

		var isEnd = this.props.isEnd || false;
		var loadingText = (isEnd) ? '已加载全部' : '正在加载中…';

		return (
			<div className="loading" style={loadingStyle}>
			    <p>{loadingText}</p>
			</div>
		);
	}
}