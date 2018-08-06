import React, { Component } from 'react';
import { Container, Header, Content, Text, CardItem, Card, Body } from 'native-base';

export default class List extends Component {
	constructor(props) {
		super(props)
	}

	renderCardList(sightings) {
		if (!sightings.length) {
			return (
				<Container><Text>No Sightings</Text></Container>
			)
		}

		return sightings.map(d => {
			return (
				<Card>
					<CardItem header>
						<Text>{d.bear_type}</Text>
					</CardItem>
					<CardItem>
						<Body>
							<Text>{d.num_bears} </Text>
						</Body>
					</CardItem>
					<CardItem footer>
						<Text>{d.zipcode}</Text>
					</CardItem>
				</Card>
			)
		})



	}

	render() {
		return (
			<Container>
				<Header />
				<Content>
					{this.renderCardList(this.props.sightings)}
				</Content>
		</Container>
	);
	}
}
