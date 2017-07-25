import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';

import App from './App';

const renderApp = Component => {
	let Wrapper = observer(() => {
		return (
			<AppContainer>
				<Component/>
			</AppContainer>
		);
	});
	render(
		<Wrapper/>,
		document.getElementById('pages')
	)
}

renderApp(App)

if (module.hot) {
	module.hot.accept(() => {
		renderApp(App)
	});
}
