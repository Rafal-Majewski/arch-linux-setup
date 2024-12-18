import type { MessageSegmentComputer } from "../../message-segment-computer/MessageSegmentComputer.ts";

export type Job = Readonly<{
	messageSegment: string | null;
	messageSegmentComputer: MessageSegmentComputer;
	newMessageSegmentPromise: Promise<string>;
}>;
