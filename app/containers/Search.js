/**
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Alert } from 'react-native';

import {
	Container,
	Content,
	Form,
	Button,
	Input,
	Item,
	Text,
	Textarea,
	ListItem,
	CheckBox,
	Body,
	Label,
	DatePicker
} from 'native-base';

type Props = {};
export default class Search extends Component<Props> {
	constructor(props) {
		super(props)
	}

	render() {


		return (
			<Container>
			<Content>
				<Form>
					<Item stackedLabel>
						<Label>Start Date</Label>
						<DatePicker
							locale={"en"}
							modalTransparent={false}
							animationType={"fade"}
							placeHolderText=" "
							chosenDate={this.props.startDate}
							onDateChange={(val) => this.props.buildSearchQuery('start_date', val)}/>
					</Item>
					<Item stackedLabel>
						<Label>End Date</Label>
						<DatePicker
							locale={"en"}
							modalTransparent={false}
							animationType={"fade"}
							placeHolderText=" "
							chosenDate={this.props.endDate}
							onDateChange={(val) => this.props.buildSearchQuery('end_date', val)}/>
					</Item>
					<Item stackedLabel>
						<Label>Zipcode</Label>
						<Input
							value={this.props.zipcode}
							onChangeText={(val) => this.props.buildSearchQuery('zipcode', val)}/>
					</Item>
					<Item stackedLabel>
						<Label>Bear Type</Label>
					<Input
						value={this.props.bearType}
						onChangeText={(val) => this.props.buildSearchQuery('bear_type', val.toLowerCase())}/>
					</Item>
					<Item stackedLabel last>
						<Label>Number of Bears</Label>
						<Input
							value={this.props.numberOfBears}
							onChangeText={(val) => this.props.buildSearchQuery('num_bears', val)}/>
					</Item>
					<ListItem>
						<CheckBox checked={this.props.sortByNumBears} onPress={() => this.props.onCheckboxPress()}/>
						<Body>
							<Text>Sort By Number of Bears</Text>
						</Body>
					</ListItem>
				</Form>
				<Button transparent block>
					<Text>See {this.props.sightings.length} Sightings </Text>
				</Button>
				<Button onPress={() => this.props.onSearchFormSubmit()} block>
					<Text>Search</Text>
				</Button>
			</Content>
		</Container>
	);
	}
}
