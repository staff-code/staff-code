# StaffCode

converts simple text codes into Unicode which in the Bravura Text font displays as sheet music

(give an example here)

## use

StaffCode can be used in two ways:
- on `phpBB` forums with `BBCode`
- an `npm` package, e.g. in a web application

### BBCode

- Download the `.zip` file from GitHub release page.
- Drag `BravuraTextBB.otf` and `BravuraTextBB.woff` to your `assets/fonts` folder.
- Drag `staffCode.js` to your `assets/javascripts` folder.
- In ACP, fill in the "BBCode Usage" field with the contents of the `bbCodeUsage.txt` file.
- In ACP, fill in the "HTML Replacement" field with the contents of the `htmlReplacement.txt` file.

### package

```shell
npm install staff-code
```

```js
const root = buildStaffCode()
document.body.appendChild(root)

// kick it off once
translateInputToDisplay(root)
```

## development

`npm run deploy` builds both versions of StaffCode.

It uses `webpack` to bundle the `staffCode.js` file to be used for `BBCode` into `dist/bbCode`.

It uses `tsc` to transpile the library for `npm` into `dist/package`.

Use `npm start` to run a local server with a minimal demo of the package version of StaffCode, for QA purposes.

The BBCode version is published to GitHub as a release, with the contents of the `dist/bbCode` folder compressed and uploaded as an asset thereof. You'll need to install `jq` (e.g. with Chocolatey) in order to perform such programmatic releasing.
