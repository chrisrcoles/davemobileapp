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
	Content,
	Form,
	Footer,
	FooterTab,
	Button,
	Icon,
	Input,
	Item,
	Text,
	Textarea,
	Label,
	DatePicker
} from 'native-base';
import Add from './containers/Add';

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
		console.log('logging here state =', this.state);
		this.updateValue = this.updateValue.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.setActiveTab = this.setActiveTab.bind(this);
	}


	updateValue(val, data) {
		console.log('update VAL before =', this.state);
		console.log('VAL = ', val);
		console.log('DATA = ', data);

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

	render() {
		const { activeTab } = this.state;

		return (
			<Container>
				<Header />
				<Content>
					<Form>
						<Item stackedLabel>
							<Label>Start Date</Label>
							<DatePicker
								locale={"en"}
								modalTransparent={false}
								animationType={"fade"}
								placeHolderText=" "
								onDateChange={(val) => this.updateValue('startDate', val)}
							/>
						</Item>
						<Item stackedLabel>
							<Label>End Date</Label>
							<DatePicker
								locale={"en"}
								modalTransparent={false}
								animationType={"fade"}
								placeHolderText=" "
								onDateChange={(val) => this.updateValue('endDate', val)}
							/>
						</Item>
						<Item stackedLabel>
							<Label>Zipcode</Label>
							<Input onChangeText={(val) => this.updateValue('zipcode', val)}/>
						</Item>
						<Item stackedLabel>
							<Label>Bear Type</Label>
							<Input onChangeText={(val) => this.updateValue('bearType', val)}/>
						</Item>
						<Item stackedLabel last>
							<Label>Number of Bears</Label>
							<Input onChangeText={(val) => this.updateValue('numberOfBears', val)}/>
						</Item>
						<Textarea rowSpan={5} placeholder="Notes" />
					</Form>
					<Button onPress={this.onFormSubmit} block>
						<Text>Submit</Text>
					</Button>
				</Content>
				<Footer>
					<FooterTab>
						<Button
							onPress={() => this.setActiveTab('list')}
							active={this.state.activeTab==='list'}
							vertical>
							<Icon name="list" />
							<Text>List</Text>
						</Button>
						<Button
							onPress={() => this.setActiveTab('search')}
							active={this.state.activeTab==='search'}
							vertical>
							<Icon name="search" />
							<Text>Search</Text>
						</Button>
						<Button
							onPress={() => this.setActiveTab('add')}
							active={this.state.activeTab==='add'}
							vertical>
							<Icon active name="add" />
							<Text>New</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
	);
	}
}
