import type { BatteryStatusChargingState } from "../../status/charging-state/BatteryStatusChargingState.ts";

export function computeBatteryStatusChargingState(
	statusCommandOutput: "Charging\n" | "Discharging\n" | "Full\n",
): BatteryStatusChargingState {
	switch (statusCommandOutput) {
		case "Charging\n": {
			return "charging";
		}
		case "Discharging\n": {
			return "discharging";
		}
		case "Full\n": {
			return "full";
		}
	}
}
