import type { MessageSegmentComputer } from "../../message-segment-computer/MessageSegmentComputer.ts";

export type JobUpdateContext = Readonly<{
	index: number;
	newMessageSegment: string;
	messageSegmentComputer: MessageSegmentComputer;
}>;
