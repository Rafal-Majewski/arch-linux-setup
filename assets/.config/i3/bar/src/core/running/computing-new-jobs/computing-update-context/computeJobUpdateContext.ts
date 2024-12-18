import type { Job } from "../../job/Job.ts";
import type { JobUpdateContext } from "../update-context/JobUpdateContext.ts";

export async function computeJobUpdateContext(
	jobs: readonly Job[],
): Promise<JobUpdateContext> {
	const context: JobUpdateContext = await Promise.race(
		jobs.map((job: Job, index): Promise<JobUpdateContext> =>
			job.newMessageSegmentPromise.then(
				(newMessageSegment): JobUpdateContext => ({
					index,
					newMessageSegment,
					messageSegmentComputer: job.messageSegmentComputer,
				}),
			)
		),
	);

	return context;
}
