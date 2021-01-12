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

- Follow the instructions at `https://app.sagittal.org/staffcode/README.txt`.

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

const options: Partial<StaffCodeOptions> = {
    ui: {
        inline: true,           // default: false (whether the display appears as a <span> or a <div>)
        interactive: false,     // default: true (whether a textarea input for instantly changing the display appears)
        downloadButton: false,  // default: true (whether a download button for a vectorized SVG appears)
        copyLinkButton: false,  // default: true (whether a button to add query params to the URL for the current codes and then copy the link)
        sizeSpinner: false,     // default: true (whether a numeric spinner appears to adjust the size)
        lineSpinner: false,     // default: true (whether a numeric spinner appears to adjust the line height)
        reference: false        // default: true (whether an expandable reference which you can click to insert codes appears)
    },
    initial: {
        size: 1.3,              // default: 1 (the overall scaling, via the font-size attribute)
        line: 1.5,              // default: 2 (affects the spacing of staves, via the line-height attribute)
        codes: "ston Fcl",      // default: "ston Gcl ; "
        referenceOpen: true     // default: false
    },
    font: "Petaluma",           // default: "Bravura Text BB" (you'll have to move a custom font to assets/fonts)
    callback,                   // default: undefined
}

loadFontsThen((): void => {
    const root: HTMLSpanElement = setupPackageRoot(options)
    document.body.appendChild(root)
})
```

The WOFF and OTF variants of the Bravura Text BB font are included in the package. You should serve them
at `assets/fonts/*` for them to be automatically picked up.

The download button, reference, copy link button, size spinner, line spinner, and interactive mode are not made
available in the bbCode variant.

The copy link button only writes the query params to the URL bar if it detects that it's running in the StaffCode web
app.

## development

`npm run deploy` builds both variants of StaffCode.

It uses `webpack` to bundle the `staffCode.js` file to be used for `BBCode` into `dist/bbCode`.

It uses `tsc` to transpile the library for `npm` into `dist/package`.

Use `npm start` to run a local server with a minimal demo of the package variant of StaffCode, for QA purposes.

The BBCode variant is distributed via the StaffCode web app at `https://app.sagittal.org/staffcode/staffCode.js`. The
Sagittal web app (which includes the StaffCode web app) uses a `webpack` plugin to copy the contents of `dist/bbCode`
from its copy of `staff-code` in its `node_modules` into its own `dist`.

You may need to install `wget` in order to deploy, since it is used to update the SMuFL and Bravura dependencies
in `vendor`. I used `choco install wget` while running my terminal as an administrator.

After deploying, you can use the `npm run update-staff-code` script in the `scripts/forum` script group to update the
Sagittal forum.

And to update the Sagittal web app, in the `app` repo, run `npm upgrade` and confirm you pull in the npm package you
just published. Then run `npm run deploy` there (which in turn cd's into its `dist` folder which is actually a submodule
repo, the GitHub pages one, for `https://app.sagittal.org/staffcode`, for which committing and pushing is equivalent to
deploying the new static app) (don't forget to commit afterwards).

# TODO: add more information about how the bin/ and vendor/ stuff works
