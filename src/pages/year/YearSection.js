import React, { Component } from 'react';
import styled from 'styled-components';
import { elideMonth } from '../../utils/misc';

const Section = styled.section`
	> ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 5.5rem;
		justify-items: center;
		align-items: center;

		font-size: 200%;
		font-weight: 600;

		> li {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			> p.dark-box {
				color: #33cccc;
			}
			&:hover {
				background-color: paleturquoise;
			}
			&:active {
				transform: scale(0.95);
			}
		}
	}
`;

export default class YearSection extends Component {
	render() {
		return (
			<Section>
				<ul>
					{this.props.monthsList.map((month, index) => (
						<li key={month}>
							<p
								className={
									this.props.currentMonthIndex === index ? 'dark-box blue' : ''
								}
							>
								{elideMonth(month)}
							</p>
						</li>
					))}
				</ul>
			</Section>
		);
	}
}
