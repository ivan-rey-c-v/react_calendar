import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	padding: 0.25rem 0.75rem;
	font-size: 110%;
	font-weight: 600;
	border: none;
	cursor: pointer;
	box-shadow: 1px 1px 4px gray;

	&.default {
		background-color: #cccccc;
	}
	&:hover {
		transform: translateY(-1px);
	}
	&:active {
		transform: scale(0.95);
	}
`;

export default class ButtonComponent extends Component {
	render() {
		return (
			<Button
				className={this.props.primary ? 'dark-box' : 'default'}
				onClick={this.props.onClick}
			>
				{this.props.value}
			</Button>
		);
	}
}
