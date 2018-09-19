import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { elideMonth } from '../../utils/misc';

const Section = styled.section`
	> ol {
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

			> a {
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				width: 100%;
				height: 100%;
				> p.dark-box {
					color: #33cccc;
				}
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
				<ol>
					{this.props.monthsList.map((month, index) => (
						<li key={month}>
							<Link
								to={{
									pathname: `/month-${index}`
								}}
							>
								<p
									className={
										this.props.currentMonthIndex === index
											? 'dark-box blue'
											: ''
									}
								>
									{elideMonth(month)}
								</p>
							</Link>
						</li>
					))}
				</ol>
			</Section>
		);
	}
}
