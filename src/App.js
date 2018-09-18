import React, { Component } from 'react';

import { RootStore } from './context/RootContext';

class App extends Component {
	render() {
		return (
			<RootStore>
				<div className="App">
					<h1>Hello from React!</h1>
				</div>
			</RootStore>
		);
	}
}

export default App;
