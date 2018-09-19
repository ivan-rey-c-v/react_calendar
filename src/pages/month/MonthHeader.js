import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid indigo;
	height: 2.5rem;
	padding: 0 0.5rem 0 0.25rem;

	> .nav {
		display: flex;
		font-weight: 600;
		font-size: 125%;
		cursor: pointer;
		color: #009933;
		> p {
			padding-left: 0.25rem;
		}
		&:hover {
			opacity: 0.75;
		}
		&:active {
			transform: scale(0.95);
		}
	}

	& .month-name {
		font-weight: 600;
		font-size: 125%;
	}
`;

export default class MonthHeader extends Component {
	render() {
		return (
			<Header>
				<div className="nav" onClick={this.props.onClick}>
					<p> &lt; </p>
					<p> {this.props.year} </p>
				</div>
				<div>
					<p className={this.props.isCurrentMonth ? 'dark-box' : 'month-name'}>
						{this.props.monthName}
					</p>
				</div>
			</Header>
		);
	}
}
