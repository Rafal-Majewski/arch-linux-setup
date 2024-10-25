#!/bin/sh
echo "Updating what's currently installed using Pacman..."
sudo pacman --sync --refresh --sysupgrade

echo "Installing Git..."
sudo pacman --sync --needed git

echo "Checking if the Git user name is set..."
if [ -z "$(git config --global user.name)" ]; then
	read -p "Enter your Git user name: " GIT_USER_NAME
	echo "Setting the Git user name..."
	git config --global user.name "$GIT_USER_NAME"
fi
