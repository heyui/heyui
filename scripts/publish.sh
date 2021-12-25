npm run build

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


set -e
echo "git push"
git push
set -e

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