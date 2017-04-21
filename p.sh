git add -A
git commit -m 'publish至npm暂时commit'
echo "迁移代码"
cp -R heyui ../zanshi
echo "切换至gh-pages分支"
git checkout master
cp -R ../zanshi/heyui/* ./
npm-version-up
git add -A
git commit -m '新版'
git pull
git push