const storageName = 'React-calendar-state'

export function getStateFromStorage() {
	let stateFromStorage = window.localStorage.getItem(storageName)
	return JSON.parse(stateFromStorage)
}

export function setStateToStorage(state) {
	let stringState = JSON.stringify(state)
	window.localStorage.setItem(storageName, stringState)
	return state
}
