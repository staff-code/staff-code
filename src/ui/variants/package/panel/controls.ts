import {staffCodeConfig} from "../globals"
import {buildCopyLinkButton} from "./copyLink"
import {buildDownloadButton} from "./download"
import {buildLineSpinnerWrapper, buildSizeSpinnerWrapper} from "./spinners"

const buildControls = (): HTMLSpanElement => {
    const {ui: {sizeSpinner, lineSpinner, copyLinkButton, downloadButton}} = staffCodeConfig

    const controls = document.createElement("span")
    controls.classList.add("sc-controls")

    if (sizeSpinner) {
        const sizeSpinnerWrapper = buildSizeSpinnerWrapper()
        controls.appendChild(sizeSpinnerWrapper)
    }

    if (lineSpinner) {
        const lineSpinnerWrapper = buildLineSpinnerWrapper()
        controls.appendChild(lineSpinnerWrapper)
    }

    if (copyLinkButton) {
        const copyLinkButton = buildCopyLinkButton()
        controls.appendChild(copyLinkButton)
    }

    if (downloadButton) {
        const downloadButton = buildDownloadButton()
        controls.appendChild(downloadButton)
    }

    return controls
}

export {
    buildControls,
}
