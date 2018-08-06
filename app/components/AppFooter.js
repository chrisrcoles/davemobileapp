/**
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';

import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

type Props = {};

export default class AppFooter extends Component<Props> {
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
