#!/bin/sh
CURRENT_BRIGHTNESS=$(cat /sys/class/backlight/intel_backlight/brightness)
MAXIMAL_BRIGHTNESS=$(cat /sys/class/backlight/intel_backlight/max_brightness)
POSSIBLE_NEW_BRIGHTNESS=$((CURRENT_BRIGHTNESS - MAXIMAL_BRIGHTNESS / 40))
ACTUAL_NEW_BRIGHTNESS=$((POSSIBLE_NEW_BRIGHTNESS > MAXIMAL_BRIGHTNESS ? MAXIMAL_BRIGHTNESS : POSSIBLE_NEW_BRIGHTNESS))
echo $ACTUAL_NEW_BRIGHTNESS > /sys/class/backlight/intel_backlight/brightness
