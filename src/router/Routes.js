import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Year from '../pages/Year';

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" component={Year} exact />
			</Switch>
		);
	}
}
