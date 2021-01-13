# StaffCode

converts simple text codes into Unicode which in the Bravura Text font displays as sheet music

```
ston Gcl ; d5 /|\ ; nt ;
```

<img src="/github/readme.svg"/>

## use

StaffCode can be used in three ways:

1) on `phpBB` forums with `BBCode`,
2) as an `npm` package, e.g. installed in a web application,
3) or with the StaffCode web app, running at `https://staffcode.org`.

### BBCode

- Download the `.zip` file from GitHub release page.
- Follow the instructions in the `README.txt` file contained there.

### package

```shell
npm install staff-code
```

Example usage:

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
app. It still copies the link to the web app to your clipboard in either case.

### app

Visit `https://staffcode.org` and have fun!

## development

After cloning, don't forget to `cd` into `dist` and `git checkout main`. There's probably a way I could do a recursive
submodule initiation, like I did on other big projects, but I'm too lazy.

Use `npm start` to run a local version of the web app.

## deployment

`npm run deploy` builds both the `bbCode` and `package` variants of StaffCode, as well as the web `app`.

The web `app` and the `bbCode` variant are bundled by `webpack`, while `tsc` is used to simply transpile the `package`.

The BBCode variant is published to GitHub as a release, with the contents of the `dist/bbCode` folder archived and
uploaded as an asset thereof.

You may need to install `wget` and `jq` in order to deploy. Chocolatey is good for this sort of thing. I
used `choco install wget` while running my terminal as an administrator.

Additional dependencies (besides `node_modules`) are located in the `vendor` directory. These are on key JSON data files
from Bravura and SMuFL. As a first step of each deploy, these dependencies are updated. The code in the `bin` directory
then processes this data into a form where it can be consumed by StaffCode's `src` code.
