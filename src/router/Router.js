import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

export default class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		);
	}
}
