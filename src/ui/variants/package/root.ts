import {Maybe, setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {BRAVURA_TEXT_SC} from "../../constants"
import {translateInputToDisplay} from "../../translate"
import {StaffCodeCallback, StaffCodeOptions} from "../../types"
import {MONOSPACED_FONT} from "./constants"
import {applyCss} from "./css"
import {buildPackageDisplayWrapper} from "./display"
import {loadGoogleFont} from "./font"
import {components, staffCodeConfig} from "./globals"
import {computeInitialCodes, computeInitialLine, computeInitialReferenceOpen, computeInitialSize} from "./initial"
import {buildPanel, setPreviousInputState} from "./panel"
import {buildReferenceWrapper} from "./reference"

const setupPackageRoot = (options: StaffCodeOptions = {}): HTMLSpanElement => {
    const {
        gui: {
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
        font = BRAVURA_TEXT_SC,
        callback,
    } = options
    setAllPropertiesOfObjectOnAnother({
        objectToChange: staffCodeConfig, objectWithProperties: {
            gui: {
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

    loadGoogleFont(MONOSPACED_FONT)
    applyCss()

    const root = document.createElement("span")
    components.root = root
    root.classList.add("staff-code")

    const panel = buildPanel()
    root.appendChild(panel)

    const displayWrapper = buildPackageDisplayWrapper({font, initialLine, inline, initialSize})
    root.appendChild(displayWrapper)

    if (reference) {
        const referenceExpander = buildReferenceWrapper()
        root.appendChild(referenceExpander)
    }

    translateInputToDisplay(root, callback as Maybe<StaffCodeCallback>)
    setPreviousInputState()

    return root
}

export {
    setupPackageRoot,
}
