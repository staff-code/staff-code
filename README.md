# StaffCode

converts simple text codes into Unicode which in the Bravura Text font displays as sheet music

```
ston Gcl ; d5 /|\ ; nt ;
```

<img src="/github/readme.svg"/>

## use

StaffCode can be used in two ways:
- on `phpBB` forums with `BBCode`
- an `npm` package, e.g. in a web application

### BBCode

- Follow the instructions at `https://sagittal.github.io/README.txt`.

### package

```shell
npm install staff-code
```

Recommended usage:

```ts
import {setupPackageRoot, loadFontsThen, StaffCodeOptions} from "staff-code"

const callback = (inputSentence: string, unicodeSentence: string): any => {
    console.warn("user input:", inputSentence, "output unicode:", unicodeSentence)
}

const options: StaffCodeOptions = {
    interactive: false,         // default: true (whether a textarea input for instantly changing the display appears)
    download: false,            // default: true (whether a download button for a vectorized SVG appears)
    copyLink: false,            // default: true (whether a button to add query params to the URL for the current codes and then copy the link)
    inline: false,              // default: true (whether the display appears as a <span> or a <div>
    lineHeight: 1.5,            // default: 2 (affects the spacing of staves)
    size: 1.3,                  // default: 1 (the overall scaling of the font)
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

Note that the "Copy Link" button reads and writes the `codes` query param.

## development

`npm run deploy` builds both variants of StaffCode.

It uses `webpack` to bundle the `staffCode.js` file to be used for `BBCode` into `dist/bbCode`.

It uses `tsc` to transpile the library for `npm` into `dist/package`.

Use `npm start` to run a local server with a minimal demo of the package variant of StaffCode, for QA purposes.

The BBCode variant is published to GitHub as a release, with the contents of the `dist/bbCode` folder archived and uploaded as an asset thereof. You'll need to install `jq` (e.g. with Chocolatey) in order to perform such programmatic releasing.

You may need to install 7-zip in order to deploy, since it is used to archive the asset as a .zip file. I used `choco install 7zip` while running my terminal as an administrator.

After deploying, you can use the `npm run update-staff-code` script in the `scripts/forum` script group to update the Sagittal forum.

And to update the Sagittal web app, in the `app` repo, run `npm upgrade` and confirm you pull in the npm package you just published. Then run `npm run deploy` there (which in turn cd's into its `dist` folder which is actually a submodule repo, the GitHub pages one, for `https://sagittal.github.io`, for which commiting and pushing is equivalent to deploying the new static app) (don't forget to commit afterwards).
