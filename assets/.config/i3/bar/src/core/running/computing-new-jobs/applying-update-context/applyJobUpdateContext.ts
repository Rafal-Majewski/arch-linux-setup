import type { Job } from "../../job/Job.ts";
import type { JobUpdateContext } from "../update-context/JobUpdateContext.ts";
import { createJob } from "./creating-job/createJob.ts";

export function applyJobUpdateContext(
	jobs: readonly Job[],
	context: JobUpdateContext,
): readonly Job[] {
	const newJob: Job = createJob(
		context.newMessageSegment,
		context.messageSegmentComputer,
	);

	const newJobs: readonly Job[] = jobs.with(context.index, newJob);
	return newJobs;
}
