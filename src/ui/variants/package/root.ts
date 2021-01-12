import {Maybe, setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {buildDisplay} from "../../display"
import {DEFAULT_FONT} from "../../fonts"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeCallback, StaffCodeOptions} from "../../types"
import {buildCopyLinkButton} from "./copyLink"
import {applyCss} from "./css"
import {buildDownloadButton} from "./download"
import {components, staffCodeConfig} from "./globals"
import {computeInitialCodes, computeInitialLine, computeInitialReferenceOpen, computeInitialSize} from "./initial"
import {buildPackageInput} from "./input"
import {buildReferenceWrapper} from "./reference"
import {buildLineSpinnerWrapper, buildSizeSpinnerWrapper} from "./spinners"

const setupPackageRoot = (options: StaffCodeOptions = {}): HTMLSpanElement => {
    const {
        ui: {
            inline = false,
            interactive = true,
            downloadButton = true,
            copyLinkButton = true,
            sizeSpinner = true,
            lineSpinner = true,
            reference = true,
        } = {},
        initial: {
            codes = computeInitialCodes(),
            size: initialSize = computeInitialSize(),
            line: initialLine = computeInitialLine(),
            referenceOpen = computeInitialReferenceOpen(),
        } = {},
        font = DEFAULT_FONT,
        callback,
    } = options
    setAllPropertiesOfObjectOnAnother({
        objectToChange: staffCodeConfig, objectWithProperties: {
            ui: {
                inline,
                interactive,
                downloadButton,
                copyLinkButton,
                sizeSpinner,
                lineSpinner,
                reference,
            },
            initial: {
                codes,
                size: initialSize,
                line: initialLine,
                referenceOpen,
            },
            font,
            callback,
        } as StaffCodeOptions,
    })

    applyCss()

    const root = document.createElement("span")
    components.root = root
    root.classList.add("staff-code")

    const input = buildPackageInput()
    components.input = input
    root.appendChild(input)

    if (sizeSpinner) {
        const sizeSpinnerWrapper = buildSizeSpinnerWrapper()
        root.appendChild(sizeSpinnerWrapper)
    }

    if (lineSpinner) {
        const lineSpinnerWrapper = buildLineSpinnerWrapper()
        root.appendChild(lineSpinnerWrapper)
    }

    if (copyLinkButton) {
        const copyLinkButton = buildCopyLinkButton()
        root.appendChild(copyLinkButton)
    }

    if (downloadButton) {
        const downloadButton = buildDownloadButton()
        root.appendChild(downloadButton)
    }

    const display = buildDisplay({font, initialLine, inline, initialSize})
    components.display = display
    root.appendChild(display)

    if (reference) {
        const referenceExpander = buildReferenceWrapper()
        root.appendChild(referenceExpander)
    }

    transferInputToDisplay(root, callback as Maybe<StaffCodeCallback>)

    return root
}

export {
    setupPackageRoot,
}
