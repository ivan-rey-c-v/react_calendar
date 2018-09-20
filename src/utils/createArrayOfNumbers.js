export default function createArrayOfNumbers(start, end) {
	const container = [];

	for (let i = start; i <= end; i++) {
		container.push(i);
	}

	return container;
}
