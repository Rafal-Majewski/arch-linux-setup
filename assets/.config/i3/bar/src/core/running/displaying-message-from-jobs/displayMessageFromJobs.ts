import { computeMessageFromJobs } from "./computing-message-from-jobs/computeMessageFromJobs.ts";
import type { Job } from "../job/Job.ts";

export function displayMessageFromJobs(
	jobs: readonly Job[],
): void {
	const message = computeMessageFromJobs(jobs);
	console.log(message);
}
