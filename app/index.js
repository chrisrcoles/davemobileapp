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
import Search from './containers/Search';

type Props = {};
const defaultState = {
	activeTab: 'search',
	startDate: undefined,
	endDate: undefined,
	zipcode: '',
	bearType: '',
	numberOfBears: '',
	notes: '',
	sightings: [],
	searchUrl: 'http://127.0.0.1:3000/api/v1/sightings/search?',
	loading: false,
	validForm: true,
	sortByNumBears: false,
	queries: {}
};

export default class DaveApp extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = defaultState;
		this.updateValue = this.updateValue.bind(this);
		this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
		this.setActiveTab = this.setActiveTab.bind(this);
		this.onSearchFormSubmit = this.onSearchFormSubmit.bind(this);
		this.onCheckboxPress = this.onCheckboxPress.bind(this);
		this.buildSearchQuery = this.buildSearchQuery.bind(this);
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

	onAddFormSubmit() {
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

	async searchBearSightings(url) {
		console.log('searchBearSightings() with url = ', url)
		try {
			let response = await fetch(url, { method: 'GET' });
			let json = await response.json();
			return json;
		} catch (error) {
			console.log('found error from API ', error)
		}
	}

	onSearchFormSubmit() {
		let query;
		let searchUrl = this.state.searchUrl;

		for (query in this.state.queries) {
			if (Object.keys(this.state.queries).length > 1) {
				searchUrl += `${query}=${this.state.queries[query]}&`
			} else {
				searchUrl += `${query}=${this.state.queries[query]}`
			}
		}

		const lastChar = searchUrl[searchUrl.length - 1];

		if (lastChar === '&') {
			searchUrl = searchUrl.substring(0, searchUrl.length - 1);
		}

		console.log('search URL = ', searchUrl)

		this.searchBearSightings(searchUrl)
			.then(sightings => {
				console.log('sightings = ', sightings);
				this.setState({ sightings })
			})
	}

	resetForm() {
		const state = Object.assign({}, defaultState);
		this.setState(state);
	}

	async submitForm({ startDate, endDate, bearType, zipcode, numberOfBears, notes }) {
		const num_bears = parseInt(numberOfBears);

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
					num_bears,
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

	buildSearchQuery(property, value) {
		let queries = this.state.queries;
		queries[property] = value;
		this.setState({ queries });
	}

	onCheckboxPress () {
		this.setState({ sortByNumBears: !this.state.sortByNumBears});
		this.buildSearchQuery('sort', 'num_bears')
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
						onAddFormSubmit={this.onAddFormSubmit}
						validForm={this.state.validForm}/>)

			case 'list':
				return (
					<List
						sightings={this.state.sightings}/>)

			case 'search':
				return (
					<Search
						sightings={this.state.sightings}
						onSearchFormSubmit={this.onSearchFormSubmit}
						onCheckboxPress={this.onCheckboxPress}
						sortByNumBears={this.state.sortByNumBears}
						buildSearchQuery={this.buildSearchQuery}/>)
		}
	}

	render() {

		return (
			<Container>
				<Header />
				{this.renderPageContent()}
				<AppFooter
					numberOfSightings={this.state.sightings.length}
					setActiveTab={this.setActiveTab}
					activeTab={this.state.activeTab}/>
			</Container>
	);
	}
}
