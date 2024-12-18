import type { Job } from "../../job/Job.ts";
import { computeMessageFromSegments } from "./computing-message-from-segments/computeMessageFromSegments.ts";
import { computeMessageSegmentsFromJobs } from "./computing-message-segments/computeMessageSegmentsFromJobs.ts";

export function computeMessageFromJobs(
	jobs: readonly Job[],
): string {
	const segments = computeMessageSegmentsFromJobs(jobs);
	const message = computeMessageFromSegments(segments);
	return message;
}
