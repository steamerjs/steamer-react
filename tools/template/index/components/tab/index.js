import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';
import { 

} from '../../constants/constants';

import Touch from 'touch';
import classNames from 'classnames';
import './index.less';


@pureRender
export default class Tab extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			
		};
		this.tabs = [
			{
				label: 1,
				text: '最新新闻'
			},
			{
				label: 2,
				text: '我的收藏'
			}
		];
		this.switchTab = this.switchTab.bind(this);
	}

	componentWillMount() {
		
	}

	componentDidMount() {

	}

	switchTab(e) {
		let tab = parseInt(e.target.dataset.tab);
		this.props.updateActiveTab(tab);

	}

	render() {
		
		return (
			<div id="cm-tab">
				<div className="cm-tabs">
				    <nav className="nav ui-border-1px">
				        <ul className="title-list">
				            {this.tabs.map(TabItem, this)}
				        </ul>
				        <TabHighlight active={this.props.tabs}/>
				    </nav>
				</div>
			</div>
		);
	}
}