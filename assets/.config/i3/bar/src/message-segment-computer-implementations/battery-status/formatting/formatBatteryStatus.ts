import type { BatteryStatus } from "../status/BatteryStatus.ts";
import { computeFormattedBatteryStatusEmoji } from "./computing-emoji/computeFormattedBatteryStatusEmoji.ts";
import { computeFormattedBatteryStatusLevel } from "./computing-level/computeFormattedBatteryStatusLevel.ts";

export function formatBatteryStatus(status: BatteryStatus) {
	const emoji = computeFormattedBatteryStatusEmoji(status);
	const level = computeFormattedBatteryStatusLevel(status.level);
	return `${emoji} ${level}` as const;
}
