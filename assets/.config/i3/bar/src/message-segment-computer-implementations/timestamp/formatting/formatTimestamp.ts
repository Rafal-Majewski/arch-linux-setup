import { computeDecimalTime } from "./computing-decimal-time/computeDecimalTime.ts";
import { computeTimeEmoji } from "./computing-time-emoji/computeTimeEmoji.ts";

export function formatTimestamp(date: Date) {
	const yearInFormattedTimestamp = date.getFullYear().toString();

	const monthInFormattedTimestamp = (date.getMonth() + 1).toString().padStart(
		2,
		"0",
	);

	const dayInFormattedTimestamp = (date.getDate()).toString().padStart(2, "0");
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const decimalTime = computeDecimalTime(hours, minutes, seconds);
	const timeEmoji = computeTimeEmoji(decimalTime);

	const hourInFormattedTimestamp = hours.toString().padStart(
		2,
		"0",
	);

	const minuteInFormattedTimestamp = minutes.toString().padStart(
		2,
		"0",
	);

	const secondInFormattedTimestamp = seconds.toString().padStart(
		2,
		"0",
	);

	return `🗓️  ${yearInFormattedTimestamp}-${monthInFormattedTimestamp}-${dayInFormattedTimestamp} ${timeEmoji} ${hourInFormattedTimestamp}:${minuteInFormattedTimestamp}:${secondInFormattedTimestamp}` as const;
}
