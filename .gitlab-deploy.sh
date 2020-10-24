#!/bin/bash

# . /etc/profile
cd doc
rm -rf node_modules
npm install --production
# npm install
hey build
set -e
#cos-put /srv/cw-webui
IF EXIST /home/gitlab-runner/heyui-old (
    rm -rf /home/gitlab-runner/heyui-old
)

IF EXIST /home/gitlab-runner/heyui (
    mv /home/gitlab-runner/heyui /home/gitlab-runner/heyui-old
)

rm -rf /home/gitlab-runner/heyui
set -e
/home/gitlab-runner/heyui
set -e