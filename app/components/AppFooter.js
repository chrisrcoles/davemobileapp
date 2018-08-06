/**
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';

import {
	Badge,
	Footer,
	FooterTab,
	Button,
	Icon,
	Text
} from 'native-base';

type Props = {};

export default class AppFooter extends Component<Props> {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Footer>
				<FooterTab>
					<Button
						onPress={() => this.props.setActiveTab('list')}
						active={this.props.activeTab==='list'}
						vertical>

						<Badge primary vertical style={ { alignSelf: 'center', top: 25, left: 20} }>
							<Text>{this.props.numberOfSightings}</Text>
						</Badge>

						<Icon name="list" />
						<Text>List</Text>
					</Button>
					<Button style={ { top: 5 } }
						onPress={() => this.props.setActiveTab('search')}
						active={this.props.activeTab==='search'}
						vertical>
						<Icon name="search" />
						<Text>Search</Text>
					</Button>
					<Button style={ { top: 5 } }
						onPress={() => this.props.setActiveTab('add')}
						active={this.props.activeTab==='add'}
						vertical>
						<Icon active name="add" />
						<Text>New</Text>
					</Button>
				</FooterTab>
			</Footer>
	);
	}
}
