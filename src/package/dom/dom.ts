import {display} from "./display"
import {downloadButton} from "./downloadButton"
import {input} from "./input"
import {root} from "./root"

// TODO: PACKAGE INTERFACE
//  I feel like this should be a class, so you can say `const staffCode = new StaffCode()`
//  - constructor options: which font, initial text, callback to translating, custom codewords
//  - it also shouldn't need to pass root to `translateInputToDisplay`; have it fallback to the internal root
//  - and also expose something to allow the EDO script to write the SVG to file, related to Copy Image button
//  - it also shouldn't force you use browser stuff (document) if you don't want to

const buildStaffCode = (): HTMLDivElement => {
    root.appendChild(input)
    root.appendChild(display)
    root.appendChild(downloadButton)

    return root
}

export {
    buildStaffCode,
}
