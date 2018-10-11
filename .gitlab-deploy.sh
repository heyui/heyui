#!/bin/bash

# . /etc/profile
cd doc
npm install --registry=http://registry.npm.taobao.org
# npm install
hey build
#cos-put /srv/cw-webui
# rm -rf /var/www/heyui
mv -rf dist /var/www/heyui