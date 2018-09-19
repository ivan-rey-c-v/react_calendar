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

const Li = styled.li`
	${props => {
		if (props.start) {
			return {
				// grid column starts at 1
				gridColumnStart: props.start + 1
			};
		}
	}};
`;

export default class MonthSection extends Component {
	render() {
		return (
			<Section>
				<ol>
					{this.props.daysArray.map(day => {
						return (
							<Li key={day} start={day === 1 ? this.props.startOfMonth : null}>
								<Link to={`/month-${this.props.monthIndex}/day-${day}`}>
									<code
										className={this.props.dayOfMonth === day ? 'dark-box' : ''}
									>
										{day}
									</code>
								</Link>
							</Li>
						);
					})}
				</ol>
			</Section>
		);
	}
}
