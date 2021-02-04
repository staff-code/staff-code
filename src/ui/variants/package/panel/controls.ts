import {staffCodeConfig} from "../globals"
import {buildCopyLinkButton} from "./copyLink"
import {buildDownloadButton} from "./download"
import {buildImageSelect} from "./download/select"
import {buildLineSpinnerWrapper, buildSizeSpinnerWrapper} from "./spinners"

const buildControls = (): HTMLSpanElement => {
    const {gui: {sizeSpinner, lineSpinner, copyLinkButton, downloadButton, imageSelect}} = staffCodeConfig

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

    if (imageSelect) {
        const imageSelect = buildImageSelect()
        controls.appendChild(imageSelect)
    }

    return controls
}

export {
    buildControls,
}
