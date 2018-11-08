import setRandomNumber from './setRandomNumber'

export default function setRandomID(name) {
	let limit = setRandomNumber(0, 3)
	let numbers = []

	for (let i = 0; i <= limit; i++) {
		// 32 - 126 codepoints has one/two char length
		let magicNumber = setRandomNumber(32, 126)
		numbers.push(magicNumber)
	}

	return `${name}-${numbers.join()}-${String.fromCodePoint(...numbers)}`
}
