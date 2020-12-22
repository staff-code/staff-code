import {buildDisplay} from "../../display"
import {buildDownloadButton} from "../../downloadButton"
import {buildSvg} from "../../svg"
import {transferInputToDisplay} from "../../transfer"
import {buildPackageInput} from "./input"

// TODO: CLEAN, READY TO GO: BBCODE VS PACKAGE INTERFACE
//  I feel like this should be a class, so you can say `const staffCode = new StaffCode()`
//  - constructor options: which font it uses, initial text, callback to translating
//  - And keep updating the README accordingly for all of this
//  - Re: custom font, for BBCode, probably in the HTML replacement somehow, yes,
//  As we discussed, just give it the inline style there
//  Well it will have to override what automatically gets put there
//  Maybe provide a demo where you unnecessarily assign it to Bravura Text BB
//  - (the current 2x) space between staves seems good. I suppose we may want to let the user control that in future.

const setupPackageRoot = (): HTMLDivElement => {
    const root = document.createElement("div")
    root.classList.add("staff-code")

    const svg = buildSvg()

    const display = buildDisplay()
    root.appendChild(display)
    const input = buildPackageInput(root)
    root.appendChild(input)
    const downloadButton = buildDownloadButton(display, svg)
    root.appendChild(downloadButton)

    transferInputToDisplay(root)

    return root
}

export {
    setupPackageRoot,
}
