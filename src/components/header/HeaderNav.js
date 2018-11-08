import React from 'react'
import Header from './Header'

import styled from 'styled-components'

const Nav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	font-size: 1rem;
	font-weight: 600;
`

const HeaderNav = props => {
	return (
		<Header>
			<Nav>{props.children}</Nav>
		</Header>
	)
}

export default React.memo(HeaderNav)
