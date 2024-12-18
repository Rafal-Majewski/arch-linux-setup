import type { AsynchronousMessageSegmentComputer } from "../types/asynchronous/AsynchronousMessageSegmentComputer.ts";
import type { SynchronousMessageSegmentComputer } from "../types/synchronous/SynchronousMessageSegmentComputer.ts";

export interface MessageSegmentComputerVisitor<ReturnValue> {
	visitAsynchronousComputer(
		computer: AsynchronousMessageSegmentComputer,
	): ReturnValue;

	visitSynchronousComputer(
		computer: SynchronousMessageSegmentComputer,
	): ReturnValue;
}
