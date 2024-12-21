import type { VolumeStatus } from "../status/VolumeStatus.ts";
import { computeFormattedVolumeStatusEmoji } from "./computing-emoji/computeFormattedVolumeStatusEmoji.ts";
import { computeFormattedVolumeStatusLevel } from "./computing-level/computeFormattedVolumeStatusLevel.ts";

export function formatVolumeStatus(status: VolumeStatus) {
	const emoji = computeFormattedVolumeStatusEmoji(status);
	const level = computeFormattedVolumeStatusLevel(status.level);
	return `${emoji} ${level}` as const;
}
