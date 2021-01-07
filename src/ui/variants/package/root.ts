import {buildDisplay} from "../../display"
import {buildDownloadButton} from "../../downloadButton"
import {DEFAULT_FONT} from "../../fonts"
import {computeInitialCodes, computeInitialLine, computeInitialSize} from "../../initial"
import {sharedRootSetup} from "../../root"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"
import {buildPackageInput} from "./input"

const setupPackageRoot = (options: StaffCodeOptions = {}): HTMLSpanElement => {
    const {
        ui: {
            inline = false,
            interactive = true,
            downloadButton = true,
            copyLinkButton = true,
            sizeSpinner = true,
            lineSpinner = true,
        } = {},
        initial: {
            codes: initialCodes = computeInitialCodes(),
            size: initialSize = computeInitialSize(),
            line: initialLine = computeInitialLine(),
        } = {},
        font = DEFAULT_FONT,
        callback,
    } = options

    const root = document.createElement("span")
    root.classList.add("staff-code")

    const input = buildPackageInput(root, {initialCodes, interactive, callback})
    const display = buildDisplay({font, inline, initialLine, initialSize})

    root.appendChild(input)

    sharedRootSetup(root, display, input, {copyLinkButton, sizeSpinner, lineSpinner, initialSize, initialLine})
    if (downloadButton) {
        const downloadButton = buildDownloadButton(display)
        root.appendChild(downloadButton)
    }

    root.appendChild(display)

    transferInputToDisplay(root, {callback})

    return root
}

export {
    setupPackageRoot,
}
