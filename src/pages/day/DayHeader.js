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
		align-items: center;
		cursor: pointer;

		> .year {
			font-weight: 600;
			color: #009933;
			> span {
				margin-left: 0.25rem;
			}
		}
		> p {
			margin-left: 0.25rem;
		}
		&:hover {
			opacity: 0.75;
		}
		&:active {
			transform: scale(0.95);
		}
	}

	& .default {
		font-size: 150%;
		font-weight: 600;
	}
`;

export default class DayHeader extends Component {
	render() {
		return (
			<Header>
				<div className="nav" onClick={this.props.onClick}>
					<span className="year">
						<span>&lt;</span>
						<span>{this.props.year}</span>
					</span>
					<p className={this.props.isCurrentMonth ? 'dark-box' : 'default'}>
						{this.props.monthName}
					</p>
				</div>
				<div>
					<p
						className={
							this.props.dayOfMonth === this.props.dayIndex
								? 'dark-box'
								: 'default'
						}
					>
						{this.props.dayIndex}
					</p>
				</div>
			</Header>
		);
	}
}
