import React, { Component } from 'react';
import styled from 'styled-components';

import createArrayOfNumbers from '../../utils/createArrayOfNumbers';

const Select = styled.select`
	font-size: 200%;
	font-weight: 600;
`;

export default class ReminderTime extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			value: ''
		};
	}

	componentWillMount() {
		const list = createArrayOfNumbers(1, this.props.limit);
		this.setState({ list });
	}

	handleChange = e => {
		const value = e.target.value;
		this.setState({ value });
		this.props.onChange(value);
	};

	render() {
		return (
			<Select value={this.state.value} onChange={this.handleChange}>
				{this.state.list.map(v => (
					<option value={v} key={v}>
						{v}
					</option>
				))}
			</Select>
		);
	}
}
