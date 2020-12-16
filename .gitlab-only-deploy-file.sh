#!/bin/bash
cd doc

if [ -d "dist" ]; then
  if [ -d "/home/gitlab-runner/heyui-old" ]; then
    rm -rf /home/gitlab-runner/heyui-old
  fi
  if [ -d "/home/gitlab-runner/heyui" ]; then
    mv /home/gitlab-runner/heyui /home/gitlab-runner/heyui-old
  fi
  cp -rf dist /home/gitlab-runner/heyui
else
  echo "dist不存在"
fi