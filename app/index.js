/**
 * Dave Mobile React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, View } from 'react';

import {
	Container,
	Header,
	Text
} from 'native-base';
import Add from './containers/Add';
import AppFooter from './components/AppFooter';
import List from './containers/List';

type Props = {};
const defaultState = {
	activeTab: 'add',
	startDate: null,
	endDate: null,
	zipcode: '',
	bearType: '',
	numberOfBears: '',
	notes: '',
	sightings: [],
	loading: false,
	validForm: true
};

export default class DaveApp extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = defaultState;
		this.updateValue = this.updateValue.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.setActiveTab = this.setActiveTab.bind(this);
	}

	componentDidMount() {
		this.fetchList()
	}

	fetchList() {
		this.setLoadingStatus(true);
		this.fetchBearSightings()
			.then(sightings => {
				this.setLoadingStatus(false);
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

	setLoadingStatus(loading) {
		this.setState({ loading })
	}

	updateValue(val, data) {
		console.log('val = ,', val)
		console.log('data = ,', data)
		let state = {};
		state[val] = data;
		this.setState(state)
	}

	onFormSubmit(e) {
		const { startDate, endDate, bearType, zipcode, numberOfBears, notes } = this.state;

		if (!startDate || !endDate || !bearType || !zipcode || !numberOfBears || !notes || Number.isInteger(numberOfBears)) {
			this.setState({ validForm: false });
			console.log('Invalid form here show alert');
			return
		}

		this.setState({ validForm: true });
		this.setLoadingStatus(true);

		this.submitForm({ startDate, endDate, bearType, zipcode, numberOfBears, notes })
			.then(res => {
				this.setLoadingStatus(false);
				this.resetForm();
				console.log('successfully posted data')
			})
	}

	resetForm() {
		console.log('state before = ', this.state)
		const state = Object.assign({}, defaultState);
		this.setState(state)
		console.log('state after = ', this.state)
	}

	async submitForm({ startDate, endDate, bearType, zipcode, numberOfBears, notes }) {
		const bears = parseInt(numberOfBears)
		try {
			let response = await fetch(`http://127.0.0.1:3000/api/v1/sightings`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					start_date: startDate,
					end_date: endDate,
					bear_type: bearType,
					zipcode,
					num_bears: bears,
					notes
				})
			});
			let json = await response.json();
			return json;
		} catch (error) {
			console.log('error = ', error)
		}
	}

	setActiveTab(activeTab) {
		this.setState({ activeTab });

		if (activeTab === 'list') {
			this.fetchList()
		}
	}

	renderPageContent() {
		switch (this.state.activeTab) {
			case 'add':
				return (
					<Add
						startDate={this.state.startDate}
						endDate={this.state.endDate}
						zipcode={this.state.zipcode}
						bearType={this.state.bearType}
						numberOfBears={this.state.numberOfBears}
						notes={this.state.notes}
						updateValue={this.updateValue}
						onFormSubmit={this.onFormSubmit}
						validForm={this.state.validForm}/>)

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
					activeTab={this.state.activeTab}/>
			</Container>
	);
	}
}
