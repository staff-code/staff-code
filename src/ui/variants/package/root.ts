import {Maybe, setAllPropertiesOfObjectOnAnother} from "@sagittal/general"
import {BRAVURA_TEXT_BB} from "../../constants"
import {buildDisplay} from "../../display"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeCallback, StaffCodeOptions} from "../../types"
import {MONOSPACED_FONT} from "./constants"
import {buildControls} from "./controls"
import {applyCss} from "./css"
import {loadGoogleFont} from "./font"
import {components, staffCodeConfig} from "./globals"
import {computeInitialCodes, computeInitialLine, computeInitialReferenceOpen, computeInitialSize} from "./initial"
import {buildPackageInput} from "./input"
import {buildReferenceWrapper} from "./reference"

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
        font = BRAVURA_TEXT_BB,
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

    loadGoogleFont(MONOSPACED_FONT)
    applyCss()

    const root = document.createElement("span")
    components.root = root
    root.classList.add("staff-code")

    const ui = document.createElement("span")
    ui.classList.add("sc-ui")
    root.appendChild(ui)

    const input = buildPackageInput()
    ui.appendChild(input)

    const controls = buildControls()
    ui.appendChild(controls)

    const display = buildDisplay({font, initialLine, inline, initialSize})
    display.style.display = "inline-block"
    const displayWrapper = document.createElement("div")
    displayWrapper.style.flexShrink = "0"
    displayWrapper.appendChild(display)
    components.display = display
    root.appendChild(displayWrapper)

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
