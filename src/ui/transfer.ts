import {Io} from "@sagittal/general"
import {computeInputUnicode} from "../translate"

const transferInputToDisplay = (root: Element): void => {
    const input = root.querySelector("textarea")!
    const display = root.querySelector("div")!

    display.textContent = computeInputUnicode(input.value as Io)
}

export {
    transferInputToDisplay,
}
