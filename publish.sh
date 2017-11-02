echo "打包hey build"
hey b
babel build/heyui.js --minified --no-babelrc -o build/heyui.min.js
git add -A
git commit -m "package"
set -e
echo "修正版本号"
standard-version
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