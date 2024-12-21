import { AsynchronousMessageSegmentComputer } from "../../core/message-segment-computer/types/asynchronous/AsynchronousMessageSegmentComputer.ts";
import { computeVolumeStatus } from "./computing-status/computeVolumeStatus.ts";
import { formatVolumeStatus } from "./formatting/formatVolumeStatus.ts";

export class VolumeStatusMessageSegmentComputer
	extends AsynchronousMessageSegmentComputer {
	public override async compute(): Promise<string> {
		const command = new Deno.Command("wpctl", {
			args: ["get-volume", "@DEFAULT_AUDIO_SINK@"],
			stdout: "piped",
		});

		const commandOutput = new TextDecoder().decode(
			(await command.output()).stdout,
		);

		const status = computeVolumeStatus(commandOutput);
		const formattedStatus = formatVolumeStatus(status);
		return formattedStatus;
	}

	public override readonly intervalSeconds = 1;
}
