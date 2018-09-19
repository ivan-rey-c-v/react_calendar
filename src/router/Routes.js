import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Year from '../pages/year/Year';
import Month from '../pages/month/Month';
import Day from '../pages/day/Day';

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" component={Year} exact />
				<Route path="/year" component={Year} exact />
				<Route path="/month-:monthIndex" component={Month} exact />
				<Route path="/month-:monthIndex/day-:dayIndex" component={Day} exact />
			</Switch>
		);
	}
}
