import type { AsynchronousMessageSegmentComputer } from "../../../../../message-segment-computer/types/asynchronous/AsynchronousMessageSegmentComputer.ts";
import type { SynchronousMessageSegmentComputer } from "../../../../../message-segment-computer/types/synchronous/SynchronousMessageSegmentComputer.ts";
import type { MessageSegmentComputerVisitor } from "../../../../../message-segment-computer/visitor/MessageSegmentComputerVisitor.ts";
import type { Job } from "../../../../job/Job.ts";
import { wait } from "../../../../waiting/wait.ts";

export class NewJobsMessageSegmentComputerVisitor
	implements MessageSegmentComputerVisitor<Job> {
	private readonly messageSegment: string;

	public constructor(messageSegment: string) {
		this.messageSegment = messageSegment;
	}

	public visitAsynchronousComputer(
		computer: AsynchronousMessageSegmentComputer,
	): Job {
		const newMessageSegmentPromise = wait(computer.intervalSeconds).then(
			() => computer.compute(),
		);

		return {
			messageSegment: this.messageSegment,
			newMessageSegmentPromise,
			messageSegmentComputer: computer,
		};
	}

	public visitSynchronousComputer(
		computer: SynchronousMessageSegmentComputer,
	): Job {
		const newMessageSegmentPromise = wait(computer.intervalSeconds).then(
			() => computer.compute(),
		);

		return {
			messageSegment: this.messageSegment,
			newMessageSegmentPromise,
			messageSegmentComputer: computer,
		};
	}
}
