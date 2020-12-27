set -e

npm version patch
NEW_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')

# publish package variant

rm -r dist/package/* > /dev/null 2>&1 || true
npm run build-package
cp -r assets/fonts* dist/package
npm publish --access public
echo Package published.

echo Please commit.

# publish BBCode variant

rm -r dist/bbCode/* > /dev/null 2>&1 || true

npm run build-bbcode

cp src/ui/variants/bbCode/acp/README.txt dist/bbCode
STAFF_BBCODE_USAGE=$(<src/ui/variants/bbCode/acp/staff/bbCodeUsage.txt)
sed -i "s|{{STAFF_BBCODE_USAGE}}|${STAFF_BBCODE_USAGE}|g" dist/bbCode/README.txt
STAFF_HTML_REPLACEMENT=$(<src/ui/variants/bbCode/acp/staff/htmlReplacement.html)
sed -i "s|{{STAFF_HTML_REPLACEMENT}}|${STAFF_HTML_REPLACEMENT//$'\n'/'\\\n'}|g" dist/bbCode/README.txt
STAFF_HELP_LINE=$(<src/ui/variants/bbCode/acp/staff/helpLine.txt)
sed -i "s|{{STAFF_HELP_LINE}}|${STAFF_HELP_LINE}|g" dist/bbCode/README.txt
SC_BBCODE_USAGE=$(<src/ui/variants/bbCode/acp/sc/bbCodeUsage.txt)
sed -i "s|{{SC_BBCODE_USAGE}}|${SC_BBCODE_USAGE}|g" dist/bbCode/README.txt
SC_HTML_REPLACEMENT=$(<src/ui/variants/bbCode/acp/sc/htmlReplacement.html)
sed -i "s|{{SC_HTML_REPLACEMENT}}|${SC_HTML_REPLACEMENT//$'\n'/'\\\n'}|g" dist/bbCode/README.txt
SC_HELP_LINE=$(<src/ui/variants/bbCode/acp/sc/helpLine.txt)
sed -i "s|{{SC_HELP_LINE}}|${SC_HELP_LINE}|g" dist/bbCode/README.txt
cp assets/fonts/* dist/bbCode

pushd dist/bbCode
  7z a StaffCodeBBCode.zip .
popd

UPLOAD_URL=$(curl -u $(git config user.email):${GITHUB_ACCESS_TOKEN} \
  -s \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/Sagittal/staff-code/releases \
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

echo BBCode published.
