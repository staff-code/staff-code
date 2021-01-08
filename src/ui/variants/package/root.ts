import {buildDisplay} from "../../display"
import {buildDownloadButton} from "../../downloadButton"
import {DEFAULT_FONT} from "../../fonts"
import {computeInitialCodes, computeInitialLine, computeInitialReferenceOpen, computeInitialSize} from "../../initial"
import {buildReferenceLink} from "../../reference"
import {sharedRootSetup} from "../../root"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"
import {buildPackageInput} from "./input"

const setupPackageRoot = (options: StaffCodeOptions = {}): HTMLSpanElement => {
    const {
        ui: {
            inline = false,
            interactive = true,
            downloadButton = true,
            copyLinkButton = true,
            sizeSpinner = true,
            lineSpinner = true,
            reference = true,
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

    const root = document.createElement("span")
    root.classList.add("staff-code")

    const input = buildPackageInput(root, {initialCodes, interactive, callback})
    const display = buildDisplay({font, inline, initialLine, initialSize})

    root.appendChild(input)

    let referenceLink
    if (reference) {
        referenceLink = buildReferenceLink(root, input, {callback, initialReferenceOpen})
    }

    sharedRootSetup(
        root,
        display,
        input,
        referenceLink,
        {copyLinkButton, sizeSpinner, lineSpinner, initialLine, initialSize},
    )

    if (downloadButton) {
        const downloadButton = buildDownloadButton(display)
        root.appendChild(downloadButton)
    }

    root.appendChild(display)

    if (referenceLink) {
        root.appendChild(referenceLink)
    }

    transferInputToDisplay(root, {callback})

    return root
}

export {
    setupPackageRoot,
}
