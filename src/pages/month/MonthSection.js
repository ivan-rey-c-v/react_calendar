import React from 'react'
import { Link } from '@reach/router'
import IsABox from '../../components/IsABox'

import styled from 'styled-components'

const OrderedList = styled.ol`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-auto-rows: 5rem;
	justify-items: center;
	align-items: center;

	font-weight: 600;
	font-size: 1.5rem;
`
const List = styled.li`
	height: 2rem;
	width: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		color: crimson;
		background-color: lightcyan;
	}
	&:active {
		transform: scale(0.95);
	}

	${props => {
		if (props.start) {
			return {
				// grid column starts at 1
				gridColumnStart: props.start + 1
			}
		}
	}};
`

function MonthSection(props) {
	const { daysArray, startOfMonth, dayOfMonth, monthIndex } = props

	return (
		<section>
			<OrderedList>
				{daysArray.map(day => (
					<List key={day} start={day === 1 ? startOfMonth : null}>
						<Link to={`/month/${monthIndex}/day/${day}`}>
							<code>
								{
									<IsABox
										isABox={dayOfMonth === day}
										value={day}
									/>
								}
							</code>
						</Link>
					</List>
				))}
			</OrderedList>
		</section>
	)
}

export default React.memo(MonthSection)
