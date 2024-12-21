import { AsynchronousMessageSegmentComputer } from "../../core/message-segment-computer/types/asynchronous/AsynchronousMessageSegmentComputer.ts";
import { computeBatteryStatus } from "./computing-status/computeBatteryStatus.ts";
import { formatBatteryStatus } from "./formatting/formatBatteryStatus.ts";

export class BatteryStatusMessageSegmentComputer
	extends AsynchronousMessageSegmentComputer {
	public override async compute(): Promise<string> {
		const decoder = new TextDecoder();

		const [capacityCommandOutput, statusCommandOutput] = (await Promise.all(
			[
				new Deno.Command("cat", {
					args: ["/sys/class/power_supply/BAT1/capacity"],
					stdout: "piped",
				}).output(),
				new Deno.Command("cat", {
					args: ["/sys/class/power_supply/BAT1/status"],
					stdout: "piped",
				}).output(),
			],
		)).map(({ stdout }) => decoder.decode(stdout));

		const status = computeBatteryStatus(
			capacityCommandOutput,
			statusCommandOutput,
		);

		const formattedStatus = formatBatteryStatus(status);
		return formattedStatus;
	}

	public override readonly intervalSeconds = 8;
}
