import React, { Component } from 'react';
import styled from 'styled-components';
import { RootContext } from '../../context/RootContext';
import createDaysArray from '../../utils/createDaysArray';

import MonthHeader from './MonthHeader';
import WeekDays from './WeekDays';
import MonthSection from './MonthSection';

const Main = styled.main``;

export default class Month extends Component {
	goToYear = () => {
		this.props.history.push('/year');
	};

	render() {
		return (
			<RootContext>
				{({ rootState }) => {
					const { month, year, day } = rootState.currentDate;
					const { monthIndex } = this.props.match.params;
					const isCurrentMonth = month === Number(monthIndex);
					const monthName = rootState.monthsList[monthIndex];
					const daysArray = createDaysArray(year, monthIndex);

					const dayOfMonth = isCurrentMonth && day;

					return (
						<Main>
							<MonthHeader
								monthName={monthName}
								isCurrentMonth={isCurrentMonth}
								year={year}
								onClick={this.goToYear}
							/>
							<WeekDays />
							<MonthSection
								daysArray={daysArray}
								dayOfMonth={dayOfMonth}
								monthIndex={monthIndex}
							/>
						</Main>
					);
				}}
			</RootContext>
		);
	}
}
