#!/usr/bin/env bash

set -e

# update code with resources from SMuFL and Bravura

rm vendor/glyphnames.json
wget -P vendor https://raw.githubusercontent.com/w3c/smufl/gh-pages/metadata/glyphnames.json
rm vendor/bravura_metadata.json
wget -P vendor https://raw.githubusercontent.com/steinbergmedia/bravura/master/redist/bravura_metadata.json
rm vendor/ranges.json
wget -P vendor https://raw.githubusercontent.com/w3c/smufl/gh-pages/metadata/ranges.json

npm run generate-smufl-map
npm run generate-bravura-widths
npm run generate-smufl-reference

# rev version

npm version patch
NEW_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')

# include BBCode variant materials in dist/

rm -r dist/bbCode/* > /dev/null 2>&1 || true

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

# publish package variant

rm -r dist/package/* > /dev/null 2>&1 || true
npm run build-package
cp -r assets/fonts* dist/package
npm publish --access public
echo Package published.

echo Please commit.
