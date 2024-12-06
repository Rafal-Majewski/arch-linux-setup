#!/bin/sh
setxkbmap pl
eval "$(ssh-agent -s)" > /dev/null
ssh-add ~/.ssh/id_ed25519
exec i3
