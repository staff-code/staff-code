# StaffCode

converts simple text codes into Unicode which in the Bravura Text font displays as sheet music

(give an example here)

## use

StaffCode can be used in two ways:
- on phpBB forums with a bbCode
- an npm package, e.g. in a web application

### bbCode

- Download the `.zip` file from GitHub release page.
- Drag `BravuraTextBB.otf` and `BravuraTextBB.woff` to your `assets/fonts` folder.
- Drag `staffCode.js` to your `assets/javascripts` folder.
- In ACP, fill in the "bbCode Usage" field with the contents of the `bbCodeUsage.txt` file.
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
