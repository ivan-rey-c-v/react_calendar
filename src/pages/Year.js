import React, { Component } from 'react';
import styled from 'styled-components';
import { RootContext } from '../context/RootContext';

import { elideMonth } from '../utils/misc';

const Main = styled.main`
	> header {
		border-bottom: 4px solid tomato;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 5rem;
		font-size: 2.5em;
		> h1 {
			color: mediumspringgreen;
		}
	}
	> section {
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
				&:hover {
					background-color: paleturquoise;
				}
				&:active {
					transform: scale(0.95);
				}
			}
		}
	}
`;

export default class Year extends Component {
	render() {
		return (
			<RootContext>
				{({ rootState }) => (
					<Main>
						<header>
							<h1 className="dark-box">2018</h1>
						</header>
						<section>
							<ul>
								{rootState.monthsList.map(month => (
									<li>
										<p className="">{elideMonth(month)}</p>
									</li>
								))}
							</ul>
						</section>
					</Main>
				)}
			</RootContext>
		);
	}
}
