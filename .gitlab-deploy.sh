#!/bin/bash

# . /etc/profile
cd doc
rm -rf node_modules
npm install --production
# npm install
hey build
set -e
#cos-put /srv/cw-webui
rm -rf /var/www/heyui
set -e
mv dist /var/www/heyui
set -e