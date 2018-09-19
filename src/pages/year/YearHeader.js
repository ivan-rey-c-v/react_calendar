import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
	border-bottom: 4px solid tomato;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 5rem;
	font-size: 2.5em;
	> h1 {
		color: #009933;
	}
`;

export default class YearHeader extends Component {
	render() {
		return (
			<Header>
				<h1 className="dark-box">{this.props.year}</h1>
			</Header>
		);
	}
}
