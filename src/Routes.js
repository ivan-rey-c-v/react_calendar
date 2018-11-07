import React from 'react'
import { Router } from '@reach/router'

import Year from './pages/year/Year'
import Month from './pages/month/Month'
import NotFound from './pages/NotFound'

const Routes = props => {
	return (
		// Router has a div wrapper
		<Router className="routes-wrapper">
			<Year path="/" />
			<Month path="month/:monthID" />
			<Year path="/year" />
			<NotFound default />
		</Router>
	)
}

export default Routes
