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
	Body,
	Card,
	CardItem,
	Container,
	Header,
	Text
} from 'native-base';
import Add from './containers/Add';
import AppFooter from './components/AppFooter';
import List from './containers/List';

type Props = {};


export default class DaveApp extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 'list',
			sightings: []
		};
		this.updateValue = this.updateValue.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.setActiveTab = this.setActiveTab.bind(this);
	}

	componentDidMount() {
		this.fetchBearSightings()
			.then(sightings => {
				console.log('sightings = ', sightings)
				this.setState({ sightings })
			})
	}

	async fetchBearSightings() {
		try {
			let response = await fetch(`http://127.0.0.1:3000/api/v1/sightings/search`, { method: 'GET' })
			let json = await response.json();
			return json;
		} catch (error) {
			console.log('found error from API')
		}
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
				return (<List sightings={this.state.sightings}/>)

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
