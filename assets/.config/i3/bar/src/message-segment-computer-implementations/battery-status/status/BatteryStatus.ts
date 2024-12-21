import type { BatteryStatusChargingState } from "./charging-state/BatteryStatusChargingState.ts";

export type BatteryStatus = Readonly<{
	chargingState: BatteryStatusChargingState;
	level: number;
}>;
