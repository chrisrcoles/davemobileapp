/**
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';

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
								onDateChange={(val) => this.props.updateValue('startDate', val)}/>
						</Item>
						<Item stackedLabel>
							<Label>End Date</Label>
							<DatePicker
								locale={"en"}
								modalTransparent={false}
								animationType={"fade"}
								placeHolderText=" "
								onDateChange={(val) => this.props.updateValue('endDate', val)}/>
						</Item>
						<Item stackedLabel>
							<Label>Zipcode</Label>
							<Input onChangeText={(val) => this.props.updateValue('zipcode', val)}/>
						</Item>
						<Item stackedLabel>
							<Label>Bear Type</Label>
							<Input onChangeText={(val) => this.props.updateValue('bearType', val)}/>
						</Item>
						<Item stackedLabel last>
							<Label>Number of Bears</Label>
							<Input onChangeText={(val) => this.props.updateValue('numberOfBears', val)}/>
						</Item>
						<Textarea rowSpan={5} placeholder="Notes" />
					</Form>
					<Button onPress={this.props.onFormSubmit} block>
						<Text>Submit</Text>
					</Button>
				</Content>
			</Container>
	);
	}
}
