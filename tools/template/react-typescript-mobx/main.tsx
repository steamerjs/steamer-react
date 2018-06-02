import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createStores } from './stores/'
import App from './container';

const rootStores = createStores();

ReactDOM.render(
    <Provider {...rootStores}>
        <App  />
    </Provider>,
    document.getElementById('pages')
);
