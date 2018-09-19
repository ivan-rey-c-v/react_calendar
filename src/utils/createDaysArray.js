export default function createDaysArray(year, month) {
	// Date's month params start as 1: January
	month = Number(month) + 1;
	const date = new Date(year, month, 0);
	const totalDays = date.getDate();

	const daysArray = [];
	const startDay = 1;
	for (let i = startDay; i <= totalDays; i++) {
		daysArray.push(i);
	}

	return daysArray;
}
