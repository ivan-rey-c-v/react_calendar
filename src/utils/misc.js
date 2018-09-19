export function elide(str, n) {
	return str.slice(0, n);
}

export function elideMonth(str) {
	return elide(str, 3).toUpperCase();
}
