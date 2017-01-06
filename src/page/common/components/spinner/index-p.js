/** @jsx h */
import Preact, { h, Component } from 'preact';
import pureRender from 'pure-render-decorator';
var Spin = require('spin');

require('./index.less');

@pureRender
export default class Spinner extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			
		};
	}

	componentWillMount() {
		
	}

	componentDidMount() {
		var opts = {
			  lines: 12             // The number of lines to draw
			, length: 3             // The length of each line
			, width: 2              // The line thickness
			, radius: 6            // The radius of the inner circle
			, scale: 1.0            // Scales overall size of the spinner
			, corners: 1            // Roundness (0..1)
			, color: '#777'         // #rgb or #rrggbb
			, opacity: 1/4          // Opacity of the lines
			, rotate: 0             // Rotation offset
			, direction: 1          // 1: clockwise, -1: counterclockwise
			, speed: 1              // Rounds per second
			, trail: 100            // Afterglow percentage
			, fps: 20               // Frames per second when using setTimeout()
			, zIndex: 2e9           // Use a high z-index by default
			, className: 'spin'  // CSS class to assign to the element
			, top: '50%'            // center vertically
			, left: '50%'           // center horizontally
			, shadow: false         // Whether to render a shadow
			, hwaccel: false        // Whether to use hardware acceleration (might be buggy)
			, position: 'absolute'  // Element positioning
		};
		var target = document.getElementById('spin');
		var spinner = new Spin(opts).spin(target);
	}

	render() {

		console.log('render spinner');

		var isShow = this.props.isShow || false;
		var spinStyle = {
			display: (isShow) ? 'block' : 'none'
		};

		return (
			<div id="spin" style={spinStyle}></div>
		);
	}
}