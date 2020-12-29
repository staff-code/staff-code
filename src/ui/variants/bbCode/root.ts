import {buildDisplay} from "../../display"
import {buildDownloadButton} from "../../downloadButton"
import {setupInput} from "../../input"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"

const setupBBCodeRoot = (root: HTMLSpanElement, options: StaffCodeOptions = {}): void => {
    const {download = false, interactive = false, inline = false, initialText, font, lineHeight, callback} = options

    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const display = buildDisplay(inline, {font, lineHeight})
    root.appendChild(display)

    const input: HTMLTextAreaElement = root.querySelector(".input") as HTMLTextAreaElement
    setupInput(input, {interactive, initialText})

    if (download) {
        const downloadButton = buildDownloadButton(display)
        root.appendChild(downloadButton)
    }

    transferInputToDisplay(root, {callback})
}

export {
    setupBBCodeRoot,
}
