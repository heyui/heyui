echo "build lib"
npm run build

echo "build lang"
npm run buildlang

echo "build components"
npm run buildcom

lessc ./themes/index.less > ./themes/index.css -x -rp=https://cdn.jsdelivr.net/npm/heyui/themes/fonts/
lessto --js ./themes/var.less ./themes/var.js
lessto --json ./themes/var.less ./themes/var.json

git add themes

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

headr ./dist/heyui.js -o=./dist/heyui.js --version --homepage --copyright --license
headr ./dist/heyui.esm.js -o=./dist/heyui.esm.js --version --homepage --copyright --license


if [ "$1" = '' ] ; then
echo "git push tags"
git push --follow-tags
fi

echo "发布至npm"

# if [ "$1" = '' ] ; then
# npm publish
# fi
if [ "$1" = '-alpha' ] ; then
npm publish --tag=next
fi

set -e
echo "git push"
git push
set -e
