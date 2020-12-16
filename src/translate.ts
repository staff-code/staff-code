import {computeInputUnicode} from "./input"
import {Input} from "./types"

const translateInputToDisplay = (root: Element): void => {
    const input = root.querySelector("textarea")!
    const display = root.querySelector("div")!

    display.textContent = computeInputUnicode(input.value as Input)
}

export {
    translateInputToDisplay,
}
