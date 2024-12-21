import type { BatteryStatus } from "../../status/BatteryStatus.ts";
import { formattedBatteryStatusDischargingEmojis } from "./emojis/formattedBatteryStatusDischargingEmojis.ts";

export function computeFormattedBatteryStatusEmoji(
	status: BatteryStatus,
) {
	switch (status.chargingState) {
		case "discharging": {
			const emojiIndex = Math.round(status.level) as 0 | 1;
			return formattedBatteryStatusDischargingEmojis[emojiIndex];
		}
		case "charging": {
			return "🔌";
		}
		case "full": {
			return "⚡";
		}
	}
}
