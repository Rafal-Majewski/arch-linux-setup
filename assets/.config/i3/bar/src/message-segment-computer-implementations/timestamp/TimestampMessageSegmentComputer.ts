import { SynchronousMessageSegmentComputer } from "../../core/message-segment-computer/types/synchronous/SynchronousMessageSegmentComputer.ts";
import { formatTimestamp } from "./formatting/formatTimestamp.ts";

export class TimestampMessageSegmentComputer
	extends SynchronousMessageSegmentComputer {
	public override readonly intervalSeconds = 1;

	public override compute(): string {
		const timestamp = new Date();
		const formattedDate = formatTimestamp(timestamp);
		return formattedDate;
	}
}
