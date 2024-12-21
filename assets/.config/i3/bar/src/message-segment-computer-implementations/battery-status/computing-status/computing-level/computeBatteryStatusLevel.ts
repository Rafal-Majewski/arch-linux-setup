export function computeBatteryStatusLevel(
	capacityCommandOutput: string,
): number {
	const capacityCommandOutputAsNumber = Number(capacityCommandOutput);
	return capacityCommandOutputAsNumber / 100;
}
