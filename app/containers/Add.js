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
	Label,
	DatePicker
} from 'native-base';

type Props = {};
export default class Add extends Component<Props> {
	constructor(props) {
		super(props)
	}

	invalidFormAlert () {
		Alert.alert(
			'Form Invalid',
			'All inputs must be complete. ',
			[
				{text: 'OK', onPress: () => console.log('OK Pressed')},
			],
			{ cancelable: true }
		)
	}

	render() {


		return (
			<Container>
				<Content>
					{!this.props.validForm ? this.invalidFormAlert() : null}
					<Form>
						<Item stackedLabel>
							<Label>Start Date</Label>
							<DatePicker
								locale={"en"}
								modalTransparent={false}
								animationType={"fade"}
								placeHolderText=" "
								chosenDate={this.props.startDate}
								onDateChange={(val) => this.props.updateValue('startDate', val)}/>
						</Item>
						<Item stackedLabel>
							<Label>End Date</Label>
							<DatePicker
								locale={"en"}
								modalTransparent={false}
								animationType={"fade"}
								placeHolderText=" "
								chosenDate={this.props.endDate}
								onDateChange={(val) => this.props.updateValue('endDate', val)}/>
						</Item>
						<Item stackedLabel>
							<Label>Zipcode</Label>
							<Input
								value={this.props.zipcode}
								onChangeText={(val) => this.props.updateValue('zipcode', val)}/>
						</Item>
						<Item stackedLabel>
							<Label>Bear Type</Label>
							<Input
								value={this.props.bearType}
								onChangeText={(val) => this.props.updateValue('bearType', val)}/>
						</Item>
						<Item stackedLabel last>
							<Label>Number of Bears</Label>
							<Input
								value={this.props.numberOfBears}
								onChangeText={(val) => this.props.updateValue('numberOfBears', val)}/>
						</Item>
						<Textarea
							onChangeText={(val) => this.props.updateValue('notes', val)}
							value={this.props.notes}
							rowSpan={5} placeholder="Notes" />
					</Form>
					<Button onPress={() => this.props.onFormSubmit()} block>
						<Text>Submit</Text>
					</Button>
				</Content>
			</Container>
	);
	}
}
