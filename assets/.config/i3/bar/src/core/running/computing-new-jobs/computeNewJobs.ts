import type { Job } from "../job/Job.ts";
import { applyJobUpdateContext } from "./applying-update-context/applyJobUpdateContext.ts";
import { computeJobUpdateContext } from "./computing-update-context/computeJobUpdateContext.ts";
import type { JobUpdateContext } from "./update-context/JobUpdateContext.ts";

export async function computeNewJobs(
	jobs: readonly Job[],
): Promise<readonly Job[]> {
	const updateContext: JobUpdateContext = await computeJobUpdateContext(jobs);
	const newJobs: readonly Job[] = applyJobUpdateContext(jobs, updateContext);
	return newJobs;
}
