import React, { Component } from 'react';

export const RootContext = React.createContext();

export class RootStore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: 'value'
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
