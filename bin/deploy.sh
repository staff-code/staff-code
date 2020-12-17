set -e

# publish bbCode version

rm -r dist/bbCode/* > /dev/null 2>&1 || true
webpack
cp src/bbCode/acp/* dist/bbCode
# TODO: BBCODE GITHUB RELEASE, PUSH:
# Here's where you could do deploy to GitHub release stuff
# Using instructions here: https://developer.github.com/v3/repos/releases/#create-a-release
# To create the release, then upload assets to it, the assets being the contents of dist/bbCode
#  (should these all be called "release" instead of "deploy"?

# publish package version

npm version patch
rm -r dist/package/* > /dev/null 2>&1 || true
tsc
npm publish --access public
echo Package published. Please commit.
