import {Io, Sentence} from "@sagittal/general"
import {Unicode} from "../../../translate"
import {setupInput} from "../../input"
import {InputOptions} from "../../types"
import {prepareCodesToBeHumanReadableAsEncodedQueryParams} from "./human"
import {setStaffCodeCookie} from "./initial"
import {Initial} from "./types"

const buildPackageInput = (
    root: HTMLSpanElement,
    {interactive, initialCodes, callback}: InputOptions,
): HTMLTextAreaElement => {
    const input = document.createElement("textarea")

    const callbackPlusCookie = (inputSentence: Io & Sentence, unicodeSentence: Unicode & Sentence): void => {
        setStaffCodeCookie(Initial.CODES, prepareCodesToBeHumanReadableAsEncodedQueryParams(inputSentence))
        callback && callback(inputSentence, unicodeSentence)
    }

    setupInput(input, root, {interactive, initialCodes, callback: callbackPlusCookie})

    return input
}

export {
    buildPackageInput,
}
