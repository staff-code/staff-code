import {buildCopyLinkButton} from "../../copyLinkButton"
import {buildDisplay} from "../../display"
import {buildDownloadButton} from "../../downloadButton"
import {computeInitialLineHeight, computeInitialSize} from "../../initial"
import {buildLineHeightSpinnerWrapper} from "../../lineHeight"
import {buildSizeSpinnerWrapper} from "../../size"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"
import {buildPackageInput} from "./input"

const setupPackageRoot = (options: StaffCodeOptions = {}): HTMLSpanElement => {
    const {
        download = true,
        interactive = true,
        inline = false,
        initialText,
        font,
        initialLineHeight = computeInitialLineHeight(),
        callback,
        initialSize = computeInitialSize(),
        copyLink = true,
        sizeSpinner = true,
        lineHeightSpinner = true,
    } = options

    const root = document.createElement("span")
    root.classList.add("staff-code")

    const display = buildDisplay({font, inline, initialLineHeight, initialSize})
    root.appendChild(display)

    const input = buildPackageInput(root, {initialText, interactive, callback})
    root.appendChild(input)

    // todo repeated code
    let sizeSpinnerWrapper
    if (sizeSpinner) {
        sizeSpinnerWrapper = buildSizeSpinnerWrapper(display, {initialSize})
        root.appendChild(sizeSpinnerWrapper)
    }

    let lineHeightSpinnerWrapper
    if (lineHeightSpinner) {
        lineHeightSpinnerWrapper = buildLineHeightSpinnerWrapper(display, {initialLineHeight})
        root.appendChild(lineHeightSpinnerWrapper)
    }

    if (copyLink) {
        let sizeSpinnerInput = sizeSpinnerWrapper ?
            sizeSpinnerWrapper.querySelector("input") :
            undefined
        let lineHeightSpinnerInput = lineHeightSpinnerWrapper ?
            lineHeightSpinnerWrapper.querySelector("input") :
            undefined
        const copyLinkButton = buildCopyLinkButton(
            input,
            sizeSpinnerInput || undefined,
            lineHeightSpinnerInput || undefined,
        )
        root.appendChild(copyLinkButton)
    }
    if (download) {
        const downloadButton = buildDownloadButton(display)
        root.appendChild(downloadButton)
    }

    transferInputToDisplay(root, {callback})

    return root
}

export {
    setupPackageRoot,
}
