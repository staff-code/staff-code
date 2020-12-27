import {Io, Sentence} from "@sagittal/general"
import {computeInputSentenceUnicode} from "../translate"

const transferInputToDisplay = (root: Element): void => {
    const input = root.querySelector("textarea")!
    const display = root.querySelector("div")!

    display.textContent = computeInputSentenceUnicode(input.value as Io & Sentence)
}

export {
    transferInputToDisplay,
}
