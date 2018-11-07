import React from 'react'
import { Link } from '@reach/router'
import Box from '../../components/Box'

import styled from 'styled-components'

import { elideMonth } from '../../utils/misc'

const OrderedList = styled.ol`
	margin-top: 1rem;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 5.5rem;
	justify-content: center;
`
const List = styled.li`
	height: 100%;
	width: 100%;
	font-weight: 900;
	font-size: 1.4rem;

	a {
		height: 100%;
		width: 100%;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			background-color: paleturquoise;
		}
		&:active {
			transform: scale(0.95);
		}
	}
`

function YearSection(props) {
	return (
		<section>
			<OrderedList>
				{props.monthsList.map((month, index) => (
					<List key={month}>
						<Link to={`month/${index}`}>
							<div>
								{props.currentMonthIndex === index ? (
									<Box>
										<h2>{elideMonth(month)}</h2>
									</Box>
								) : (
									<h2>{elideMonth(month)}</h2>
								)}
							</div>
						</Link>
					</List>
				))}
			</OrderedList>
		</section>
	)
}

export default React.memo(YearSection)
