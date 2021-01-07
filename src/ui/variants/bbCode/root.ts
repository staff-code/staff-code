import {buildDisplay} from "../../display"
import {DEFAULT_FONT} from "../../fonts"
import {computeInitialCodes, computeInitialLine, computeInitialSize} from "../../initial"
import {setupInput} from "../../input"
import {sharedRootSetup} from "../../root"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"

const setupBBCodeRoot = (root: HTMLSpanElement, options: StaffCodeOptions = {}): void => {
    const {
        ui: {
            inline = false,
            interactive = false,
            copyLinkButton = false,
            sizeSpinner = false,
            lineSpinner = false,
        } = {},
        initial: {
            codes: initialCodes = computeInitialCodes(),
            size: initialSize = computeInitialSize(),
            line: initialLine = computeInitialLine(),
        } = {},
        font = DEFAULT_FONT,
        callback,
    } = options

    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const input: HTMLTextAreaElement = root.querySelector(".input") as HTMLTextAreaElement
    const display = buildDisplay({font, inline, initialLine, initialSize})

    setupInput(input, root, {interactive, initialCodes, callback})

    sharedRootSetup(root, display, input, {copyLinkButton, sizeSpinner, lineSpinner, initialLine, initialSize})

    root.appendChild(display)

    transferInputToDisplay(root, {callback})
}

export {
    setupBBCodeRoot,
}
