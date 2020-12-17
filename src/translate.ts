import {Io} from "@sagittal/general"
import {computeInputUnicode} from "./input"

// TODO: FEATURE IMPROVE: You probably shouldn't have to kick this off once. It should do it automatically

const translateInputToDisplay = (root: Element): void => {
    const input = root.querySelector("textarea")!
    const display = root.querySelector("div")!

    display.textContent = computeInputUnicode(input.value as Io)
}

export {
    translateInputToDisplay,
}
