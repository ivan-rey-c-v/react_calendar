import React, { Component } from 'react';
import styled from 'styled-components';

import { RootContext } from '../../context/RootContext';
import DayHeader from './DayHeader';

const Main = styled.main``;

export default class Day extends Component {
	goToMonth = () => {
		this.props.history.push(`/month-${this.props.match.params.monthIndex}`);
	};

	render() {
		return (
			<RootContext>
				{({ rootState }) => {
					const { monthIndex, dayIndex } = this.props.match.params;
					const { year, month, day } = rootState.currentDate;
					const monthName = rootState.monthsList[monthIndex];

					const isCurrentMonth = month === Number(monthIndex);
					const dayOfMonth = isCurrentMonth && day;

					return (
						<Main>
							<DayHeader
								year={year}
								monthName={monthName}
								isCurrentMonth={isCurrentMonth}
								dayOfMonth={dayOfMonth}
								dayIndex={Number(dayIndex)}
								onClick={this.goToMonth}
							/>
						</Main>
					);
				}}
			</RootContext>
		);
	}
}