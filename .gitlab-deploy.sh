#!/bin/bash

# . /etc/profile
cd doc
npm install --production
# npm install
hey build
#cos-put /srv/cw-webui
rm -rf /var/www/heyui
mv dist /var/www/heyui