export function computeFormattedBatteryStatusLevel(level: number) {
	const formattedLevelNumber = (level * 100).toFixed(0).padStart(
		3,
		"0",
	);

	return `${formattedLevelNumber}%` as const;
}
