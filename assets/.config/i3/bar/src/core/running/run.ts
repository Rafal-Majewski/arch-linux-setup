import type { MessageSegmentComputer } from "../message-segment-computer/MessageSegmentComputer.ts";
import { computeNewJobs } from "./computing-new-jobs/computeNewJobs.ts";
import { createInitialJobs } from "./creating-initial-jobs/createInitialJobs.ts";
import { displayMessageFromJobs } from "./displaying-message-from-jobs/displayMessageFromJobs.ts";
import type { Job } from "./job/Job.ts";

export async function run(
	messageSegmentComputers: readonly MessageSegmentComputer[],
): Promise<void> {
	let jobs: readonly Job[] = createInitialJobs(messageSegmentComputers);

	for (;;) {
		displayMessageFromJobs(jobs);
		jobs = await computeNewJobs(jobs);
	}
}
