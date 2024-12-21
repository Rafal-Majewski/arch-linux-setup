import type { VolumeStatus } from "../../volume-status/VolumeStatus.ts";
import { normalVolumeStatusEmojis } from "./normal-emojis/normalVolumeStatusEmojis.ts";

export function computeFormattedVolumeStatusEmoji(
	status: VolumeStatus,
) {
	if (status.isMuted) {
		return "🔇";
	}

	if (status.level > 1) {
		return "📣";
	}

	if (status.level === 0) {
		return "🔈";
	}

	const normalEmojiIndex = Math.round(
		status.level,
	) as 0 | 1;

	return normalVolumeStatusEmojis[normalEmojiIndex];
}
