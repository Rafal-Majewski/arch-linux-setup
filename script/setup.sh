sudo pacman -Syu

if ! git config --global --get user.name >/dev/null; then
    read -p "Enter your git user.name: " GIT_USER_NAME
    git config --global user.name "$GIT_USER_NAME"
fi

if ! git config --global --get user.email >/dev/null; then
    read -p "Enter your git user.email: " GIT_USER_EMAIL
    git config --global user.email "$GIT_USER_EMAIL"
fi

if ! command -v yay > /dev/null; then
    pacman -S base-devel
    pacman -S git
    CURRENT_WORKING_DIRECTORY=$(pwd)
    cd /tmp
    git clone https://aur.archlinux.org/yay.git
    cd ./yay
    makepkg -si
    cd $CURRENT_WORKING_DIRECTORY
    rm -rf /tmp/yay
    yay -Syu
fi

yay -S --needed noto-fonts i3-wm openssh rofi

if [ ! -d ~/.ssh ]; then
    ssh-keygen
fi

sudo cp $(dirname $0)/assets/backlight.rules /etc/udev/rules.d/backlight.rules
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo usermod -aG video $USER
cp $(dirname $0)/assets/decrease-brightness.sh ~/.i3/scripts/decrease-brightness.sh
cp $(dirname $0)/assets/increase-brightness.sh ~/.i3/scripts/increase-brightness.sh
cp $(dirname $0)/assets/i3-config ~/.i3/config