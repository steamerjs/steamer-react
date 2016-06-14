import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Connect from '../connect/connect';
import { Link, browserHistory } from 'react-router';


require('./index.scss');


function App(props) {

	return (
        <div>
        	{props.children}
        </div>
	)
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Connect(App);