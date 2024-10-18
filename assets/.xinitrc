#!/bin/sh

eval $(ssh-agent -s) 1>/dev/null
ssh-add ~/.ssh/id_ed25519 2>/dev/null
setxkbmap pl
exec i3
