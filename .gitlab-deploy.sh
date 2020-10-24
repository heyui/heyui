#!/bin/bash

# . /etc/profile
cd doc
rm -rf node_modules
npm install --production
# npm install
hey build
set -e

if [ -d "/home/gitlab-runner/heyui-old" ]; then
  rm -rf /home/gitlab-runner/heyui-old
fi

if [ -d "/home/gitlab-runner/heyui" ]; then
  mv /home/gitlab-runner/heyui /home/gitlab-runner/heyui-old
fi

cp -rf dist /home/gitlab-runner/heyui
set -e