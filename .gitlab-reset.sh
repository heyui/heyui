#!/bin/bash

if [[ -d "/home/gitlab-runner/heyui" && -d "/home/gitlab-runner/heyui-old"]]; then
  rm -rf /home/gitlab-runner/heyui
  cp -rf /home/gitlab-runner/heyui-old /home/gitlab-runner/heyui
fi