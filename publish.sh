echo "打包hey build"
hey b
hey b -f hey.esm.js
lessc themes/index.less>themes/index.css -x -rp=https://cdn.jsdelivr.net/npm/heyui/themes/

headr dist/heyui.js -o=dist/heyui.js --version --homepage --copyright --license
headr dist/heyui.esm.js -o=dist/heyui.esm.js --version --homepage --copyright --license

git add -A
git commit -m "package"
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
git push origin master
set -e
echo "git push tags"
git push --follow-tags origin master
echo "发布至npm"
npm publish