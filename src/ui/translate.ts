import {Io, Sentence} from "@sagittal/general"
import {computeInputSentenceUnicode} from "../translate"
import {StaffCodeCallback} from "./types"

const translateInputToDisplay = (root: HTMLSpanElement, callback?: StaffCodeCallback): void => {
    const input = root.querySelector(".sc-input") as HTMLTextAreaElement
    const display = root.querySelector(".sc-display") as HTMLElement

    const inputSentence = input.value as Io & Sentence

    const unicodeSentence = computeInputSentenceUnicode(inputSentence)

    display.textContent = unicodeSentence

    if (callback) callback(inputSentence, unicodeSentence)
}

export {
    translateInputToDisplay,
}
