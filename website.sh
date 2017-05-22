git add -A
git commit -m '打包至gh-pages，$1'
echo "开始打包代码"
set -e
hey b
set -e
echo "打包代码成功"
echo "迁移打包后的代码"
cp -R dist ../
rm -rf dist
echo "切换至gh-pages分支"
set -e
git checkout gh-pages
set -e
git pull
cp -R ../dist/* ./
cp index.html 404.html
git add -A
git commit -m '新版'
git push origin gh-pages
set -e

echo "切换至doc分支"
git checkout doc
rm -rf ../dist
