import {buildCopyLinkButton} from "../../copyLinkButton"
import {buildDisplay} from "../../display"
import {computeInitialLineHeight, computeInitialSize} from "../../initial"
import {setupInput} from "../../input"
import {buildLineHeightSpinnerWrapper} from "../../lineHeight"
import {buildSizeSpinnerWrapper} from "../../size"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"

const setupBBCodeRoot = (root: HTMLSpanElement, options: StaffCodeOptions = {}): void => {
    const {
        interactive = false,
        inline = false,
        initialText,
        font,
        initialLineHeight = computeInitialLineHeight(),
        callback,
        initialSize = computeInitialSize(),
        copyLink = false,
        sizeSpinner = false,
        lineHeightSpinner = false,
    } = options

    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const display = buildDisplay({font, inline, initialLineHeight, initialSize})
    root.prepend(display)

    const input: HTMLTextAreaElement = root.querySelector(".input") as HTMLTextAreaElement
    setupInput(input, root, {interactive, initialText, callback})

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

    transferInputToDisplay(root, {callback})
}

export {
    setupBBCodeRoot,
}
