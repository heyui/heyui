echo "打包hey build"
hey b -f scripts/config/hey.conf.js
hey b -f scripts/config/hey.esm.js
hey b -f scripts/config/hey.lang.js
hey b -f scripts/config/hey.uncompressed.js
hey b -f scripts/config/hey.components.js
lessc ./themes/index.less > ./themes/index.css -x -rp=https://cdn.jsdelivr.net/npm/heyui/themes/fonts/
lessto --js ./themes/var.less ./themes/var.js
lessto --json ./themes/var.less ./themes/var.json

set -e
echo "修正版本号"

if [ "$1" = '-alpha' ] ; then
standard-version --prerelease alpha
fi
if [ "$1" = '-beta' ] ; then
standard-version --prerelease beta
fi
if [ "$1" = '' ] ; then
standard-version
fi

# set -e
# echo "commit"
# git add -A
# git commit -m 'publish new version'


set -e
echo "git push"
git push
set -e

if [ "$1" = '' ] ; then
echo "git push tags"
git push --follow-tags
fi

echo "发布至npm"

if [ "$1" = '' ] ; then
npm publish
fi
if [ "$1" = '-alpha' ] ; then
npm publish --tag=next
fi
if [ "$1" = '-beta' ] ; then
npm publish --tag=next
fi
