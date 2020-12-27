import {Io, Sentence} from "@sagittal/general"
import {computeInputSentenceUnicode} from "../translate"

const transferInputToDisplay = (root: Element): void => {
    const input = root.querySelector(".input") as HTMLTextAreaElement
    const display = root.querySelector(".display") as HTMLElement

    display.textContent = computeInputSentenceUnicode(input.value as Io & Sentence)
}

export {
    transferInputToDisplay,
}
