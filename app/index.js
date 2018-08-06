/**
 * Dave Mobile React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, View } from 'react';
import { StyleSheet } from 'react-native';

import {
	Container,
	Header,
	Text
} from 'native-base';
import Add from './containers/Add';
import AppFooter from './components/AppFooter';

type Props = {};

const styles = StyleSheet.create({
	submitButton: {
		position: 'absolute',
		bottom:0,
		left:0,
	}
});

export default class DaveApp extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 'list'
		};
		this.updateValue = this.updateValue.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.setActiveTab = this.setActiveTab.bind(this);
	}


	updateValue(val, data) {
		let state = {};
		state[val] = data;
		this.setState(state)
	}

	onFormSubmit(e) {
		console.log('button clicked')
		console.log('e ', e)
		console.log(this.state)
	}

	setActiveTab(activeTab) {
		this.setState({ activeTab })
	}

	renderPageContent() {

		switch (this.state.activeTab) {
			case 'add':
				return (<Add updateValue={this.updateValue} onFormSubmit={this.onFormSubmit}/>)

			case 'list':
				return (<Container><Text>List</Text></Container>)

			case 'search':
				return (<Container><Text>Search</Text></Container>)
		}
	}


	render() {
		return (
			<Container>
				<Header />
				{this.renderPageContent()}
				<AppFooter
					setActiveTab={this.setActiveTab}
					activeTab={this.state.activeTab}
					/>
			</Container>
	);
	}
}
