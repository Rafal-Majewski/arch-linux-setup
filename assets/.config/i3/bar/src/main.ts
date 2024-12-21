#!/usr/bin/env -S deno run --allow-run
import { run } from "./core/running/run.ts";
import { TimestampMessageSegmentComputer } from "./message-segment-computer-implementations/timestamp/TimestampMessageSegmentComputer.ts";
const timestampMessageSegmentComputer = new TimestampMessageSegmentComputer();

const messageSegmentComputers = [
	timestampMessageSegmentComputer,
] as const;

await run(messageSegmentComputers);
