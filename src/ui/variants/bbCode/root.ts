import {buildDisplay} from "../../display"
import {DEFAULT_FONT} from "../../fonts"
import {computeInitialCodes, computeInitialLine, computeInitialReferenceOpen, computeInitialSize} from "../../initial"
import {setupInput} from "../../input"
import {buildReferenceLink} from "../../reference"
import {sharedRootSetup} from "../../root"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"

const setupBBCodeRoot = (root: HTMLSpanElement, options: StaffCodeOptions = {}): void => {
    const {
        ui: {
            inline = false,
            interactive = false,
            copyLinkButton = false,
            sizeSpinner = false,
            lineSpinner = false,
            reference = false,
        } = {},
        initial: {
            codes: initialCodes = computeInitialCodes(),
            size: initialSize = computeInitialSize(),
            line: initialLine = computeInitialLine(),
            referenceOpen: initialReferenceOpen = computeInitialReferenceOpen(),
        } = {},
        font = DEFAULT_FONT,
        callback,
    } = options

    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const input: HTMLTextAreaElement = root.querySelector(".input") as HTMLTextAreaElement
    const display = buildDisplay({font, inline, initialLine, initialSize})

    let referenceLink
    if (reference) {
        referenceLink = buildReferenceLink(root, input, {callback, initialReferenceOpen})
    }

    setupInput(input, root, {interactive, initialCodes, callback})

    sharedRootSetup(
        root,
        display,
        input,
        referenceLink,
        {copyLinkButton, sizeSpinner, lineSpinner, initialLine, initialSize},
    )

    root.appendChild(display)

    if (referenceLink) {
        root.appendChild(referenceLink)
    }

    transferInputToDisplay(root, {callback})
}

export {
    setupBBCodeRoot,
}
