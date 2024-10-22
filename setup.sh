#!/bin/sh
echo "Updating what's currently installed using Pacman..."
sudo pacman --sync --refresh --sysupgrade
