#!/bin/bash

# . /etc/profile
cd doc
rm -rf node_modules
npm install --production
# npm install
hey build
#cos-put /srv/cw-webui
rm -rf /var/www/heyui
mv dist /var/www/heyui