import React from 'react';
import Connect from '../connect/connect';

function App(props) {

	return (
        <div>
        	{props.children}
        </div>
	);
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Connect(App);