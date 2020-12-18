import {buildDisplay, buildDownloadButton, buildSvg} from "../dom"
import {buildInput} from "./input"
import {buildRoot} from "./root"

// TODO: BBCODE VS PACKAGE, INTERFACE:
//  I feel like this should be a class, so you can say `const staffCode = new StaffCode()`
//  - constructor options: which font it uses, initial text, callback to translating, custom codewords
//  - it also shouldn't need to pass root to `translateInputToDisplay`; have it fallback to the internal root
//  - and also expose something to allow the EDO script to write the SVG to file, related to Copy Image button
//  - it also shouldn't force you use browser stuff (document) if you don't want to
//  - And keep updating the README accordingly for all of this
//  - Re: custom font, for BBCode, probably in the HTML replacement somehow, yes,
//  As we discussed, just give it the inline style there
//  Well it will have to override what automatically gets put there
//  Maybe provide a demo where you unnecessarily assign it to Bravura Text BB

const buildStaffCode = (): HTMLDivElement => {
    const root = buildRoot()

    const input = buildInput(root)
    root.appendChild(input)
    const display = buildDisplay()
    root.appendChild(display)
    const svg = buildSvg()
    root.appendChild(buildDownloadButton(display, svg))

    return root
}

export {
    buildStaffCode,
}
