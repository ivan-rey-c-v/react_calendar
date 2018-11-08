import React from 'react'
import { Router } from '@reach/router'

import Year from './pages/year/Year'
import Month from './pages/month/Month'
import Day from './pages/day/Day'
import NotFound from './pages/NotFound'

const Routes = props => {
	return (
		// Router has a div wrapper
		<Router className="routes-wrapper">
			<Year path="/" />
			<Month path="month/:monthID" />
			<Day path="month/:monthID/day/:dayID" />
			<NotFound default />
		</Router>
	)
}

export default React.memo(Routes)
