import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Year from '../pages/year/Year';
import Month from '../pages/month/Month';

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" component={Year} exact />
				<Route path="/year" component={Year} exact />
				<Route path="/month-:monthIndex" component={Month} exact />
			</Switch>
		);
	}
}
