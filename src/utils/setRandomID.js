import setRandomNumber from './setRandomNumber';

export default function setRandomID(name) {
	let limit = setRandomNumber(0, 3);
	let numberContainer = [];
	let stringContainer = [];

	for (let i = 0; i <= limit; i++) {
		let magicNumber = setRandomNumber(0, 99);
		numberContainer.push(magicNumber);
		let string = String.fromCodePoint(magicNumber);
		stringContainer.push(string);
	}

	return [name, ...numberContainer, ...stringContainer].join('');
}
