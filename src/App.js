import React, { Component } from 'react';

import { RootStore } from './context/RootContext';
import Router from './router/Router';

class App extends Component {
	render() {
		return (
			<RootStore>
				<Router />
			</RootStore>
		);
	}
}

export default App;
