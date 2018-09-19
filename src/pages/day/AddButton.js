import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	font-size: 150%;
	font-weight: 900;
	padding-bottom: 0.1rem;
	background-color: crimson;
	border: none;
	box-shadow: 1px 1px 4px gray;

	position: absolute;
	bottom: 2rem;
	right: 2rem;
	cursor: pointer;
	&:hover {
		transform: translateY(-1px);
	}
	&:active {
		transform: scale(0.95);
	}
`;

export default class AddButton extends Component {
	render() {
		return <Button onClick={this.props.onClick}>+</Button>;
	}
}
