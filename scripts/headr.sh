headr -f ./dist/heyui.js -o=dist/heyui.js --version --homepage --copyright --license
headr -f ./dist/heyui.esm.js -o=dist/heyui.esm.js --version --homepage --copyright --license

git add dist
git add themes
git commit -m 'build dist'