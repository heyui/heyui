echo "打包hey build"
hey b
git add -A
git commit
set -e
echo "修正版本号"
standard-version
set -e
git add -A
git commit -m 'publish new version'
set -e
git push --follow-tags origin master
echo "发布至npm"
npm publish