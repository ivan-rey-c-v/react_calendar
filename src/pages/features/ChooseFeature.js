import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 350px;
	max-height: 700px;

	> div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	& ul {
		width: 90%;
		font-size: 150%;
		font-weight: 600;
		color: white;
		background-color: black;
		cursor: pointer;
		> li {
			width: 100%;
			padding: 1.5rem;
			text-align: center;
			&:hover {
				background-color: #33cccc;
				color: black;
			}
			&:active {
				transform: scale(0.95);
			}
		}
	}

	& button {
		margin-top: 2rem;
		margin-left: 10%;
		align-self: flex-start;
	}
`;

export default class ChooseFeature extends Component {
	goToDay = () => {
		const { monthIndex, dayIndex } = this.props.match.params;
		this.props.history.push(`/month-${monthIndex}/day-${dayIndex}`);
	};

	goToFeature = e => {
		const feature = e.target.textContent.toLowerCase();
		const { monthIndex, dayIndex } = this.props.match.params;
		this.props.history.push(`/month-${monthIndex}/day-${dayIndex}/${feature}`);
	};

	render() {
		return (
			<Main>
				<div>
					<ul onClick={this.goToFeature}>
						<li>Reminder</li>
						<li>Todo</li>
						<li>Notes</li>
					</ul>
					<Button value="Close" onClick={this.goToDay} />
				</div>
			</Main>
		);
	}
}
