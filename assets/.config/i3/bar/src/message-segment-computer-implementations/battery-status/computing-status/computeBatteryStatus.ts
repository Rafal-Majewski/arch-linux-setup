import type { BatteryStatus } from "../status/BatteryStatus.ts";
import { computeBatteryStatusChargingState } from "./computing-charging-state/computeBatteryStatusChargingState.ts";
import { computeBatteryStatusLevel } from "./computing-level/computeBatteryStatusLevel.ts";

export function computeBatteryStatus(
	capacityCommandOutput: string,
	statusCommandOutput: "Charging\n" | "Discharging\n" | "Full\n",
): BatteryStatus {
	const level = computeBatteryStatusLevel(capacityCommandOutput);
	const chargingState = computeBatteryStatusChargingState(statusCommandOutput);

	return {
		chargingState,
		level,
	};
}
