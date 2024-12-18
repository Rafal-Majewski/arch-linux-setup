import type { MessageSegmentComputer } from "../../MessageSegmentComputer.ts";
import type { MessageSegmentComputerVisitor } from "../../visitor/MessageSegmentComputerVisitor.ts";

export abstract class AsynchronousMessageSegmentComputer
	implements MessageSegmentComputer {
	public abstract readonly intervalSeconds: number;

	public acceptVisitor<ReturnValue>(
		visitor: MessageSegmentComputerVisitor<ReturnValue>,
	): ReturnValue {
		const returnValue = visitor.visitAsynchronousComputer(
			this,
		);

		return returnValue;
	}

	public abstract compute(): Promise<string>;
}
