import React, { Component } from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	justify-items: center;
	align-items: center;
	height: 2rem;
	font-size: 80%;
	font-weight: 600;
	border-bottom: 2px solid lightgray;
`;

export default class WeekDays extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weeks: ['Sun', 'M', 'Tu', 'W', 'Th', 'F', 'Sat']
		};
	}

	render() {
		return (
			<Ul>
				{this.state.weeks.map(day => {
					return <li key={day}>{day}</li>;
				})}
			</Ul>
		);
	}
}
