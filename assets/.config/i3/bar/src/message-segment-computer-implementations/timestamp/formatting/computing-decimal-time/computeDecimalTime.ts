export function computeDecimalTime(
	hours: number,
	minutes: number,
	seconds: number,
) {
	return hours + minutes / 60 + seconds / 3600;
}
