import {Io, Sentence} from "@sagittal/general"
import {Unicode} from "../../../translate"
import {computeInitialText, setStaffCodeCookie} from "../../initial"
import {setupInput} from "../../input"
import {StaffCodeOptions} from "../../types"

const buildPackageInput = (root: HTMLSpanElement, options: StaffCodeOptions): HTMLTextAreaElement => {
    const {
        interactive,
        initialText = computeInitialText(),
        callback,
    } = options

    const input = document.createElement("textarea")

    const callbackPlusCookie = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence): void => {
        setStaffCodeCookie("input-sentence", inputSentence)
        callback && callback(inputSentence, unicodeSentence)
    }

    setupInput(input, root, {interactive, initialText, callback: callbackPlusCookie})

    return input
}

export {
    buildPackageInput,
}
