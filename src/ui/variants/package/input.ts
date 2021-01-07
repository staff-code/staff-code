import {Io, Sentence} from "@sagittal/general"
import {Unicode} from "../../../translate"
import {encodeCodes} from "../../codec"
import {setStaffCodeCookie} from "../../initial"
import {setupInput} from "../../input"
import {Initial, InputOptions} from "../../types"

const buildPackageInput = (
    root: HTMLSpanElement,
    {interactive, initialCodes, callback}: InputOptions,
): HTMLTextAreaElement => {
    const input = document.createElement("textarea")

    const callbackPlusCookie = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence): void => {
        setStaffCodeCookie(Initial.CODES, encodeCodes(inputSentence))
        callback && callback(inputSentence, unicodeSentence)
    }

    setupInput(input, root, {interactive, initialCodes, callback: callbackPlusCookie})

    return input
}

export {
    buildPackageInput,
}
