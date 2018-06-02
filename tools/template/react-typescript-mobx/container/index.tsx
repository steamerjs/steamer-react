import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';
import { Provider } from 'mobx-react';
import View from '../stores/view';
import { Stores } from '../types';

import './index.less';

interface SelectedStores {
    store?: View
}

interface Props extends SelectedStores {

}

@inject((stores: Stores): Props => ({ store: stores.ViewStore }))
@observer
export default class App extends React.Component<Props, {}>{

    private store = this.props.store;

    constructor(props: Props) {
        super(props);
        this.show = this.show.bind(this);
        this.text = this.text.bind(this);
    }

    show(): void {
        this.store.setShow(!this.store.show)
    }

    text(): string {
        if (this.store.show) {
            return '模板由 hordeliu 提供';
        } else {
            return 'credit to hordeliu';
        }
    }

    render(): JSX.Element {

        return (
            <div className="wrapper">
                <div className="logo"></div>
                <h2 className="title">steamer-react</h2>
                <div className="text">TypeScript Mobx模板</div>
                <div className="btn" onClick={this.show}>点我显示 - {this.text()}</div>
                <div className="link">
                    <a className="icon-github" href="https://github.com/steamerjs/steamer-react" target="_blank" title="Github"></a>
                    <a className="icon-docs" href="https://steamerjs.github.io/" target="_blank" title="文档"></a>
                    <a className="icon-author" href="https://github.com/lcxfs1991" target="_blank" title="作者"></a>
                </div>
            </div>
        )
    }
}
