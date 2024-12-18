import type { AsynchronousMessageSegmentComputer } from "../../../message-segment-computer/types/asynchronous/AsynchronousMessageSegmentComputer.ts";
import type { SynchronousMessageSegmentComputer } from "../../../message-segment-computer/types/synchronous/SynchronousMessageSegmentComputer.ts";
import type { MessageSegmentComputerVisitor } from "../../../message-segment-computer/visitor/MessageSegmentComputerVisitor.ts";
import type { Job } from "../../job/Job.ts";
import { wait } from "../../waiting/wait.ts";

export class InitialJobsMessageSegmentComputerVisitor
	implements MessageSegmentComputerVisitor<Job> {
	public visitAsynchronousComputer(
		computer: AsynchronousMessageSegmentComputer,
	): Job {
		const newMessageSegmentPromise = computer.compute();

		return {
			messageSegment: null,
			newMessageSegmentPromise,
			messageSegmentComputer: computer,
		};
	}

	public visitSynchronousComputer(
		computer: SynchronousMessageSegmentComputer,
	): Job {
		const messageSegment = computer.compute();

		const newMessageSegmentPromise = wait(computer.intervalSeconds).then(
			() => computer.compute(),
		);

		return {
			messageSegment,
			newMessageSegmentPromise,
			messageSegmentComputer: computer,
		};
	}
}
