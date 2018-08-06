/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

type Props = {};

import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class DaveApp extends Component<Props> {
	render() {
		return (
			<Container>
				<Header />
				<Content />
				<Footer>
					<FooterTab>
						<Button vertical>
							<Icon name="list" />
							<Text>List</Text>
						</Button>
						<Button vertical>
							<Icon name="search" />
							<Text>Search</Text>
						</Button>
						<Button vertical active>
							<Icon active name="add" />
							<Text>New</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
	);
	}
}
