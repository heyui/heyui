#!/bin/bash

# . /etc/profile
npm install
# npm install
cd doc
hey build
#cos-put /srv/cw-webui
rm -rf /var/www/heyui
mv dist /var/www/heyui