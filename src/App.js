import React, { Component } from 'react'
import { RootStore } from './context/RootContext'
import Routes from './Routes'

class App extends Component {
	render() {
		return (
			<RootStore>
				<Routes />
			</RootStore>
		)
	}
}

export default React.memo(App)
