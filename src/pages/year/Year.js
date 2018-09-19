import React, { Component } from 'react';
import { RootContext } from '../../context/RootContext';

import YearHeader from './YearHeader';
import YearSection from './YearSection';

export default class Year extends Component {
	render() {
		return (
			<RootContext>
				{({ rootState }) => (
					<main>
						<YearHeader year={rootState.currentDate.year} />
						<YearSection
							monthsList={rootState.monthsList}
							currentMonthIndex={rootState.currentDate.month}
						/>
					</main>
				)}
			</RootContext>
		);
	}
}
