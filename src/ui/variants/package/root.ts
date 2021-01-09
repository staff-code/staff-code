import {buildDisplay} from "../../display"
import {DEFAULT_FONT} from "../../fonts"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"
import {buildCopyLinkButton} from "./copyLinkButton"
import {buildDownloadButton} from "./downloadButton"
import {computeInitialCodes, computeInitialLine, computeInitialReferenceOpen, computeInitialSize} from "./initial"
import {buildPackageInput} from "./input"
import {buildReferenceLink} from "./reference"
import {buildLineSpinnerWrapper, buildSizeSpinnerWrapper} from "./spinners"

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

    let sizeSpinnerWrapper
    if (sizeSpinner) {
        sizeSpinnerWrapper = buildSizeSpinnerWrapper(display, {initialSize})
        root.appendChild(sizeSpinnerWrapper)
    }

    let lineSpinnerWrapper
    if (lineSpinner) {
        lineSpinnerWrapper = buildLineSpinnerWrapper(display, {initialLine})
        root.appendChild(lineSpinnerWrapper)
    }

    if (copyLinkButton) {
        const copyLinkButton = buildCopyLinkButton(
            input,
            sizeSpinnerWrapper && sizeSpinnerWrapper.querySelector("input") || undefined,
            lineSpinnerWrapper && lineSpinnerWrapper.querySelector("input") || undefined,
            referenceLink,
        )
        root.appendChild(copyLinkButton)
    }

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
