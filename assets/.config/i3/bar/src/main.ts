#!/usr/bin/env -S deno run --allow-run
import { run } from "./core/running/run.ts";
import { TimestampMessageSegmentComputer } from "./message-segment-computer-implementations/timestamp/TimestampMessageSegmentComputer.ts";
import { VolumeStatusMessageSegmentComputer } from "./message-segment-computer-implementations/volume-status/VolumeStatusMessageSegmentComputer.ts";
const volumeStatusMessageSegmentComputer =
	new VolumeStatusMessageSegmentComputer();
const timestampMessageSegmentComputer = new TimestampMessageSegmentComputer();

const messageSegmentComputers = [
	volumeStatusMessageSegmentComputer,
	timestampMessageSegmentComputer,
] as const;

await run(messageSegmentComputers);
