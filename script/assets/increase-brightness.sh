current_brightness=$(cat /sys/class/backlight/intel_backlight/brightness)
maximal_brightness=$(cat /sys/class/backlight/intel_backlight/max_brightness)
possible_new_brightness=$((current_brightness + maximal_brightness / 40))
actual_new_brightness=$((possible_new_brightness > maximal_brightness ? maximal_brightness : possible_new_brightness))
echo $actual_new_brightness > /sys/class/backlight/intel_backlight/brightness
