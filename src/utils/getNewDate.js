export default function setNewDate() {
	const date = new Date();
	const container = {};

	container.year = date.getFullYear();
	container.month = date.getMonth();
	container.day = date.getDate();
	container.minute = date.getMinutes();
	container.seconds = date.getSeconds();

	return container;
}
