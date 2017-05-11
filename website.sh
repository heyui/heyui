git add -A
git commit -m '打包至gh-pages暂时commit'
echo "开始打包代码"
hey b
echo "打包代码成功"
echo "迁移打包后的代码"
cp -R gen ../
rm -rf gen
echo "切换至gh-pages分支"
git checkout gh-pages
git pull
cp -R ../gen/* ./
cp index.html 404.html
git add -A
git commit -m '新版'
git push origin gh-pages

echo "切换至doc分支"
git checkout doc
rm -rf ../gen
