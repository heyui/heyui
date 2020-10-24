#!/bin/bash
cd doc

if [[ -d "dist" && -d "/home/gitlab-runner/heyui"]]; then
  rm -rf /home/gitlab-runner/heyui
  cp -rf dist /home/gitlab-runner/heyui
fi