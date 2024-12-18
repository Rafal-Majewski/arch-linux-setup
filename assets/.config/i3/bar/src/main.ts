#!/usr/bin/env -S deno run --allow-run
import { run } from "./core/running/run.ts";
const messageSegmentComputers = [] as const;
await run(messageSegmentComputers);
