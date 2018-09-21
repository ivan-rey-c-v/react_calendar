import React, { Component } from 'react';
import styled from 'styled-components';

import AddButton from './AddButton';
import Activity from './Activity';

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
`;

export default class DaySection extends Component {
	render() {
		return (
			<Section>
				<div className="activities">
					{this.props.activities.map(activity => (
						<Activity
							activity={activity}
							key={activity.id}
							updateTodoItemStatus={this.props.updateTodoItemStatus}
						/>
					))}
				</div>
				<AddButton onClick={this.props.onClick} />
			</Section>
		);
	}
}
