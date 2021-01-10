import {DeepPartial, Em, FontName, Maybe, Multiplier, setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {buildDisplay} from "../../display"
import {DEFAULT_FONT} from "../../fonts"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeCallback, StaffCodeOptions} from "../../types"
import {buildCopyLinkButton} from "./copyLink"
import {buildDownloadButton} from "./download"
import {components, staffCodeOptions} from "./globals"
import {computeInitialCodes, computeInitialLine, computeInitialReferenceOpen, computeInitialSize} from "./initial"
import {buildPackageInput} from "./input"
import {buildReferenceExpander} from "./reference"
import {buildLineSpinnerWrapper, buildSizeSpinnerWrapper} from "./spinners"

const setupPackageRoot = (options: DeepPartial<StaffCodeOptions> = {}): HTMLSpanElement => {
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
            size = computeInitialSize(),
            line = computeInitialLine(),
            referenceOpen = computeInitialReferenceOpen(),
        } = {},
        font = DEFAULT_FONT,
        callback,
    } = options
    setAllPropertiesOfObjectOnAnother({
        objectToChange: staffCodeOptions, objectWithProperties: {
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
                size,
                line,
                referenceOpen,
            },
            font,
            callback,
        } as StaffCodeOptions,
    })

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

    const display = buildDisplay({
        font: font as FontName,
        initialLine: line as Multiplier<Em>,
        inline,
        initialSize: size as Multiplier<Em>,
    })
    components.display = display
    root.appendChild(display)

    if (reference) {
        const referenceExpander = buildReferenceExpander()
        root.appendChild(referenceExpander)
    }

    transferInputToDisplay(root, callback as Maybe<StaffCodeCallback>)

    return root
}

export {
    setupPackageRoot,
}
