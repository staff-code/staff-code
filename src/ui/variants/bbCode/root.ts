import {buildCopyLinkButton} from "../../copyLinkButton"
import {buildDisplay} from "../../display"
import {setupInput} from "../../input"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"

const setupBBCodeRoot = (root: HTMLSpanElement, options: StaffCodeOptions = {}): void => {
    const {
        interactive = false,
        inline = false,
        initialText,
        font,
        lineHeight,
        callback,
        size,
        copyLink = false,
    } = options

    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const display = buildDisplay({font, inline, lineHeight, size})
    root.prepend(display)

    const input: HTMLTextAreaElement = root.querySelector(".input") as HTMLTextAreaElement
    setupInput(input, root, {interactive, initialText, callback})

    if (copyLink) {
        const copyLinkButton = buildCopyLinkButton(input)
        root.appendChild(copyLinkButton)
    }

    transferInputToDisplay(root, {callback})
}

export {
    setupBBCodeRoot,
}
