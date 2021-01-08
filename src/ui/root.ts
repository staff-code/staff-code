import {Maybe} from "@sagittal/general"
import {buildCopyLinkButton} from "./copyLinkButton"
import {buildLineSpinnerWrapper} from "./line"
import {buildSizeSpinnerWrapper} from "./size"
import {RootOptions} from "./types"

const sharedRootSetup = (
    root: HTMLSpanElement,
    display: HTMLElement,
    input: HTMLTextAreaElement,
    referenceLink: Maybe<HTMLDetailsElement>, // todo: this is just horrible, the confusion
    {copyLinkButton, sizeSpinner, lineSpinner, initialSize, initialLine}: RootOptions,
): void => {
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
}

export {
    sharedRootSetup,
}
