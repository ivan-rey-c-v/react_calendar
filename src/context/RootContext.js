import React, { Component } from 'react';

export const RootContext = React.createContext();

export class RootStore extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
