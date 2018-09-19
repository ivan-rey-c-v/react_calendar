export default function getStartOfMonth(year, month) {
	const date = new Date(year, month, 1);

	return date.getDay();
}
