import React, { Component } from 'react';
import merge from 'lodash.merge';
import Connect from '../connect/connect';
import { 
	
} from 'page/common/constants/cgiPath';
import { 

} from '../constants/constants';


import './index.less';

class Wrapper extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	componentDidMount() {
		
	}

	render() {

		return (
	        <div>hello world</div>
		);
	}
}

export default Connect(Wrapper);