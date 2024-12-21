import { timeEmojis } from "./emojis/timeEmojis.ts";

export function computeTimeEmoji(decimalTime: number) {
	const decimalTimeModuloTwelve = decimalTime % 12;

	const emojiIndex = Math.floor(decimalTimeModuloTwelve * 2) as
		| 0
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12
		| 13
		| 14
		| 15
		| 16
		| 17
		| 18
		| 19
		| 20
		| 21
		| 22
		| 23;

	return timeEmojis[emojiIndex];
}
