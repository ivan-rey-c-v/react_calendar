import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
	> ol {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-auto-rows: 4rem;
		justify-items: center;
		align-items: center;

		font-weight: 600;
		font-size: 125%;

		> li {
			height: 2rem;
			width: 2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;

			&:hover {
				transform: scale(0.95);
			}
		}
	}
`;

export default class MonthSection extends Component {
	render() {
		return (
			<Section>
				<ol>
					{this.props.daysArray.map(day => {
						return (
							<li key={day}>
								<Link to={`/month-${this.props.monthIndex}/day-${day}`}>
									<code
										className={this.props.dayOfMonth === day ? 'dark-box' : ''}
									>
										{day}
									</code>
								</Link>
							</li>
						);
					})}
				</ol>
			</Section>
		);
	}
}
