#!/bin/bash

if [ -d "/home/gitlab-runner/heyui-old" ]; then
  if [ -d "/home/gitlab-runner/heyui" ]; then
    rm -rf /home/gitlab-runner/heyui
  fi
  cp -rf /home/gitlab-runner/heyui-old /home/gitlab-runner/heyui
fi