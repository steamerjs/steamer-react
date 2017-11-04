import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import App from './Root.dev';

const rootEl = document.getElementById('pages');

render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./Root.dev', () => {
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            rootEl
        );
    });
}
