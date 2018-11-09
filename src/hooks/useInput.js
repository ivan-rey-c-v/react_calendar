import { useState } from 'react'

function useInput(initialVal) {
	const [value, setValue] = useState(initialVal)

	function handleChange(e) {
		setValue(e.target.value)
	}

	return {
		value,
		onChange: handleChange
	}
}

export default useInput
