export function computeMessageFromSegments(
	segments: readonly string[],
): string {
	const message = segments.join(" | ");
	return message;
}
