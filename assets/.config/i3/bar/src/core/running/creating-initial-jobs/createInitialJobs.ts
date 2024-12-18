import type { MessageSegmentComputer } from "../../message-segment-computer/MessageSegmentComputer.ts";
import type { Job } from "../job/Job.ts";
import { InitialJobsMessageSegmentComputerVisitor } from "./message-segment-computer-visitor/InitialJobsMessageSegmentComputerVisitor.ts";

export function createInitialJobs(
	messageSegmentComputers: readonly MessageSegmentComputer[],
): readonly Job[] {
	const jobs: readonly Job[] = messageSegmentComputers
		.map((
			messageSegmentComputer: MessageSegmentComputer,
		): Job => {
			const visitor = new InitialJobsMessageSegmentComputerVisitor();

			const job: Job = messageSegmentComputer.acceptVisitor(
				visitor,
			);

			return job;
		});

	return jobs;
}
