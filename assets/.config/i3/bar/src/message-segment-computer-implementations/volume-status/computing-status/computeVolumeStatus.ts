import type { VolumeStatus } from "../status/VolumeStatus.ts";

export function computeVolumeStatus(
	commandOutput: string,
): VolumeStatus {
	const commandOutputMatch = commandOutput.match(
		/^Volume: (?<level>\d+\.\d+)(?<muteStatus> \[MUTED\])?\n$/,
	) as
		& RegExpMatchArray
		& Readonly<
			{
				groups: Readonly<
					{
						level: string;
						muteStatus: string | undefined;
					}
				>;
			}
		>;

	const {
		level: levelAsString,
		muteStatus,
	} = commandOutputMatch.groups;

	const level = Number(levelAsString);
	const isMuted = typeof muteStatus !== "undefined";

	return {
		level,
		isMuted,
	};
}
