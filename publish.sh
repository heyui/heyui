git add -A
git commit -m 'publish至npm暂时commit'
echo "迁移代码"
cp -R heyui ../zanshi
echo "切换至master分支"
git checkout master
cp -R ../zanshi/* ./
rm -rf ../zanshi
echo "打包hey build"
hey b
echo "更新版本"
standard-version
git add -A
git commit -m 'publish new version'
git pull
git push --follow-tags origin master
echo "发布至npm"
npm publish