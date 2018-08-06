import React from 'react';
import renderer from 'react-test-renderer'

import DaveApp from './../../app/index';

describe('<DaveApp />', () => {

	it('renders', () => {
		const tree = renderer
			.create(<DaveApp/>)
			.toJSON();

		expect(tree).toMatchSnapshot();
	})

});
