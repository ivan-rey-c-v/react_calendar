import React from 'react'
import Box from './Box'

const IsABox = props => {
	const content = <p>{props.value}</p>

	return props.isABox ? <Box>{content}</Box> : content
}

export default React.memo(IsABox)
