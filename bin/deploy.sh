set -e

npm version patch
NEW_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[:space:]')

# publish BBCode version

rm -r dist/bbCode/* > /dev/null 2>&1 || true

npm run build-bbcode
cp src/bbCode/acp/* dist/bbCode
cp assets/fonts/* dist/bbCode

pushd dist/bbCode
  touch StaffCodeBBCode.tar.gz
  tar --exclude=StaffCodeBBCode.tar.gz -czvf StaffCodeBBCode.tar.gz .
popd

UPLOAD_URL=$(curl -u $(git config user.email):${GITHUB_ACCESS_TOKEN} \
  -s \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/Sagittal/staff-code/releases \
  -d "{\"tag_name\":\"v${NEW_VERSION}-beta\"}" \
  | jq -r '.upload_url'
)
UPLOAD_URL=${UPLOAD_URL/"{?name,label}"/"?name=StaffCodeBBCode.tar.gz"}

curl -u $(git config user.email):${GITHUB_ACCESS_TOKEN} \
-X POST \
--data-binary @"dist/bbCode/StaffCodeBBCode.tar.gz" \
-H "Accept: application/vnd.github.v3+json" \
-H "Content-Type: application/octet-stream" \
"${UPLOAD_URL}"

echo BBCode published.

# publish package version

rm -r dist/package/* > /dev/null 2>&1 || true
npm run build-package
cp -r assets/fonts* dist/package
npm publish --access public
echo Package published.

echo Please commit.
