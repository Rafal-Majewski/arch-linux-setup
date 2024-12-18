import type { MessageSegmentComputerVisitor } from "./visitor/MessageSegmentComputerVisitor.ts";

export interface MessageSegmentComputer {
	acceptVisitor<ReturnValue>(
		visitor: MessageSegmentComputerVisitor<ReturnValue>,
	): ReturnValue;

	readonly intervalSeconds: number;
}
