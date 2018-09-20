import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Year from '../pages/year/Year';
import Month from '../pages/month/Month';
import Day from '../pages/day/Day';
import ChooseFeature from '../pages/features/ChooseFeature';
import Reminder from '../pages/features/Reminder';
import Todo from '../pages/features/Todo';
import Notes from '../pages/features/Notes';

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" component={Year} exact />
				<Route path="/year" component={Year} exact />
				<Route path="/month-:monthIndex" component={Month} exact />
				<Route path="/month-:monthIndex/day-:dayIndex" component={Day} exact />
				<Route
					path="/month-:monthIndex/day-:dayIndex/choosefeature"
					component={ChooseFeature}
					exact
				/>
				<Route
					path="/month-:monthIndex/day-:dayIndex/reminder"
					component={Reminder}
					exact
				/>
				<Route
					path="/month-:monthIndex/day-:dayIndex/notes"
					component={Notes}
					exact
				/>
				<Route
					path="/month-:monthIndex/day-:dayIndex/todo"
					component={Todo}
					exact
				/>
			</Switch>
		);
	}
}
