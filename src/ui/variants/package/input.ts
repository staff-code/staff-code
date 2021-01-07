import {Io} from "@sagittal/general"
import {setupInput} from "../../input"
import {StaffCodeOptions} from "../../types"

const INITIAL_STAFF_CODE_INPUT_VALUE = "ston Gcl ; " as Io

const buildPackageInput = (root: HTMLSpanElement, options: StaffCodeOptions): HTMLTextAreaElement => {
    const {
        interactive,
        initialText = new URLSearchParams(window.location.search).get("codes") || INITIAL_STAFF_CODE_INPUT_VALUE,
        callback
    } = options

    const input = document.createElement("textarea")

    setupInput(input, root, {interactive, initialText, callback})

    return input
}

export {
    buildPackageInput,
}
