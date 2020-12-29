# StaffCode

converts simple text codes into Unicode which in the Bravura Text font displays as sheet music

(give an example here)

## use

StaffCode can be used in two ways:
- on `phpBB` forums with `BBCode`
- an `npm` package, e.g. in a web application

### BBCode

- Download the `.zip` file from GitHub release page.
- Follow the instructions in the `README.txt` file contained there.

### package

```shell
npm install staff-code
```

Recommended usage:

```ts
import {setupPackageRoot, loadFontsThen, StaffCodeOptions} from "staff-code"

const callback = (inputSentence: string, unicodeSentence: string): any => {
    console.log("user input:", inputSentence, "output unicode:", unicodeSentence)
}

const options: StaffCodeOptions = {
    interactive: false,         // default: true (whether a textarea input for instantly changing the display appears)
    download: false,            // default: true (whether a download button for a vectorized SVG appears)
    inline: false,              // default: true (whether the display appears as a <span> or a <div>
    lineHeight: 1.5,            // default: 2 (affects the spacing of staves)
    initialText: "ston Fcl",    // default: "ston Gcl ; "
    font: "Petaluma",           // default: "Bravura Text BB" (you'll have to move a custom font to assets/fonts)
    callback,                   // default: undefined
}

loadFontsThen((): void => {
    const root: HTMLSpanElement = setupPackageRoot(options)
    document.body.appendChild(root)
})
```

The WOFF and OTF variants of the Bravura Text BB font are included in the package. You should serve them at `assets/fonts/*` for them to be automatically picked up.

## development

`npm run deploy` builds both variants of StaffCode.

It uses `webpack` to bundle the `staffCode.js` file to be used for `BBCode` into `dist/bbCode`.

It uses `tsc` to transpile the library for `npm` into `dist/package`.

Use `npm start` to run a local server with a minimal demo of the package variant of StaffCode, for QA purposes.

The BBCode variant is published to GitHub as a release, with the contents of the `dist/bbCode` folder archived and uploaded as an asset thereof. You'll need to install `jq` (e.g. with Chocolatey) in order to perform such programmatic releasing.

You may need to install 7-zip in order to deploy, since it is used to archive the asset as a .zip file. I used `choco install 7zip` while running my terminal as an administrator.
