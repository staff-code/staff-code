#!/usr/bin/env bash

set -e

# update code with resources from SMuFL and Bravura

rm vendor/glyphnames.json || true
wget -P vendor https://raw.githubusercontent.com/w3c/smufl/gh-pages/metadata/glyphnames.json
rm vendor/bravura_metadata.json || true
wget -P vendor https://raw.githubusercontent.com/steinbergmedia/bravura/master/redist/bravura_metadata.json
rm vendor/ranges.json || true
wget -P vendor https://raw.githubusercontent.com/w3c/smufl/gh-pages/metadata/ranges.json

npm run generate-smufl-map
npm run generate-bravura-widths
npm run generate-smufl-reference

# rev version

npm version patch
NEW_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')
npm run generate-version # for the code to display what version it's running

# clean (cannot remove entire dist or you lose the submodule!)

rm -rf dist/package/* > /dev/null 2>&1 || true
rm -rf dist/app/* > /dev/null 2>&1 || true
rm -rf dist/bbCode/* > /dev/null 2>&1 || true

# copy fonts

mkdir -p dist/package/assets/fonts
cp assets/fonts/* dist/package/assets/fonts
cp assets/fonts/* dist/bbCode

# publish bbCode as GitHub release

npm run build-bbcode

cp src/ui/variants/bbCode/acp/README.txt dist/bbCode
STAFF_BBCODE_USAGE=$(<src/ui/variants/bbCode/acp/staff/bbCodeUsage.txt)
sed -i "s@{{STAFF_BBCODE_USAGE}}@${STAFF_BBCODE_USAGE}@g" dist/bbCode/README.txt
STAFF_HTML_REPLACEMENT=$(<src/ui/variants/bbCode/acp/staff/htmlReplacement.html)
sed -i "s@{{STAFF_HTML_REPLACEMENT}}@${STAFF_HTML_REPLACEMENT//$'\n'/'\n'}@g" dist/bbCode/README.txt
STAFF_HELP_LINE=$(<src/ui/variants/bbCode/acp/staff/helpLine.txt)
sed -i "s@{{STAFF_HELP_LINE}}@${STAFF_HELP_LINE}@g" dist/bbCode/README.txt
SC_BBCODE_USAGE=$(<src/ui/variants/bbCode/acp/sc/bbCodeUsage.txt)
sed -i "s@{{SC_BBCODE_USAGE}}@${SC_BBCODE_USAGE}@g" dist/bbCode/README.txt
SC_HTML_REPLACEMENT=$(<src/ui/variants/bbCode/acp/sc/htmlReplacement.html)
sed -i "s@{{SC_HTML_REPLACEMENT}}@${SC_HTML_REPLACEMENT//$'\n'/'\n'}@g" dist/bbCode/README.txt
SC_HELP_LINE=$(<src/ui/variants/bbCode/acp/sc/helpLine.txt)
sed -i "s@{{SC_HELP_LINE}}@${SC_HELP_LINE}@g" dist/bbCode/README.txt

pushd dist/bbCode
  7z a StaffCodeBBCode.zip .
popd

UPLOAD_URL=$(curl -u $(git config user.email):${GITHUB_ACCESS_TOKEN} \
  -s \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/staff-code/staff-code/releases \
  -d "{\"tag_name\":\"v${NEW_VERSION}-beta\"}" \
  | jq -r '.upload_url'
)
UPLOAD_URL=${UPLOAD_URL/"{?name,label}"/"?name=StaffCodeBBCode.zip"}

curl -u $(git config user.email):${GITHUB_ACCESS_TOKEN} \
-X POST \
--data-binary @"dist/bbCode/StaffCodeBBCode.zip" \
-H "Accept: application/vnd.github.v3+json" \
-H "Content-Type: application/octet-stream" \
"${UPLOAD_URL}"

# publish package variant

npm run build-package
npm publish --access public

# publish app

npm run build-app
pushd dist/app || exit
  touch .nojekyll
  echo staffcode.org > CNAME
  git add .
  git commit -m "${NEW_VERSION}"
  git push
popd || exit

echo Package published, bbCode released, and app deployed. Please commit, and if necessary, update the Sagittal forum config for bbCodes using the scripts-forum repo.
