echo "build dist"
npm run builddist

echo "build lang"
npm run buildlang

echo "build components"
npm run buildcom

lessc ./themes/index.less > ./themes/index.css -x -rp=https://cdn.jsdelivr.net/npm/heyui/themes/fonts/
lessto --js ./themes/var.less ./themes/var.js
lessto --json ./themes/var.less ./themes/var.json