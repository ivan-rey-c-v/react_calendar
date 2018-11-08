import React from 'react'

import styled from 'styled-components'

const StyledHeader = styled.header`
	padding: 0.75rem 0.75rem 0.74rem 0.5rem;
	border-bottom: 2px solid var(--color-border);
	display: flex;
	justify-content: center;

	position: sticky;
	top: 0;
`

const Header = props => {
	return <StyledHeader>{props.children}</StyledHeader>
}

Header.Center = function HeaderCenter(props) {
	return <div className="header-center">{props.children}</div>
}

export default Header
