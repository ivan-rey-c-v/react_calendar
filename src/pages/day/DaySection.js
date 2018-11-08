import React from 'react'
import styled from 'styled-components'

import Activity from './Activity'

const Section = styled.section`
	width: 100%;
	height: calc(100% - 2.5rem);
	min-height: 350px;
	position: relative;

	> .activities {
		& > div:nth-of-type(odd) {
			background-color: hsl(182, 18%, 92%);
		}
	}

	& .empty {
		display: block;
		padding-top: 2rem;
		font-weight: 600;
		text-align: center;
		color: lightgray;
	}
`

function DaySection(props) {
	return (
		<Section>
			<div className="activities">
				{props.activities ? (
					props.activities.map(activity => (
						<Activity
							activity={activity}
							activitiesID={props.activitiesID}
							key={activity.id}
						/>
					))
				) : (
					<span className="empty">
						You have NO activities at this date.
					</span>
				)}
			</div>
		</Section>
	)
}

// React.memo does recognize changes in prop.activities
export default DaySection
