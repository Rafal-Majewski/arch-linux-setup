import type { MessageSegmentComputer } from "../../../../message-segment-computer/MessageSegmentComputer.ts";
import type { Job } from "../../../job/Job.ts";
import { NewJobsMessageSegmentComputerVisitor } from "./message-segment-content-visitor/NewJobsMessageSegmentComputerVisitor.ts";

export function createJob(
	newMessageSegment: string,
	messageSegmentComputer: MessageSegmentComputer,
): Job {
	const visitor = new NewJobsMessageSegmentComputerVisitor(
		newMessageSegment,
	);

	const job: Job = messageSegmentComputer.acceptVisitor(
		visitor,
	);

	return job;
}
