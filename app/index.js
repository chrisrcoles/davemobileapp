/**
 * Dave Mobile React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

type Props = {};

import { Container } from 'native-base';
import AppFooter from './components/AppFooter';
export default class DaveApp extends Component<Props> {
	render() {
		return (
			<Container>
				<AppFooter />
			</Container>
	);
	}
}
