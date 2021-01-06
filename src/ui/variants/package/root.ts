import {buildCopyLinkButton} from "../../copyLinkButton"
import {buildDisplay} from "../../display"
import {buildDownloadButton} from "../../downloadButton"
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
        lineHeight,
        callback,
        size,
        copyLink = true,
    } = options

    const root = document.createElement("span")
    root.classList.add("staff-code")

    const display = buildDisplay({font, inline, lineHeight, size})
    root.appendChild(display)

    const input = buildPackageInput(root, {initialText, interactive, callback})
    root.appendChild(input)

    if (download) {
        const downloadButton = buildDownloadButton(display)
        root.appendChild(downloadButton)
    }
    if (copyLink) {
        const copyLinkButton = buildCopyLinkButton(input)
        root.appendChild(copyLinkButton)
    }

    transferInputToDisplay(root, {callback})

    return root
}

export {
    setupPackageRoot,
}
