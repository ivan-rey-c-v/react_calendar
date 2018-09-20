import createArrayOfNumbers from './createArrayOfNumbers';

export default function createDaysArray(year, month) {
	// Date's month params start as 1: January
	month = Number(month) + 1;
	const date = new Date(year, month, 0);
	const totalDays = date.getDate();

	return createArrayOfNumbers(1, totalDays);
}
