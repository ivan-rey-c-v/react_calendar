import React, { Component } from 'react';
import getNewDate from '../utils/getNewDate';

export const RootContext = React.createContext();

export class RootStore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDate: {},
			monthsList: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			]
		};
	}

	componentWillMount() {
		console.log('Mounting RootStore');
		const currentDate = getNewDate();
		this.setState({ currentDate });
	}

	render() {
		return (
			<RootContext.Provider
				value={{
					rootState: this.state,
					setRootState: this.setState.bind(this)
				}}
			>
				{this.props.children}
			</RootContext.Provider>
		);
	}
}
