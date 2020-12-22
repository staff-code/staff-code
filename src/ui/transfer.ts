import {BLANK, finalElement, Io, NEWLINE, SPACE, TAB} from "@sagittal/general"
import {computeInputSentenceUnicode} from "../translate"

const WHITESPACE_CHARS = [NEWLINE, TAB, SPACE]

const transferInputToDisplay = (root: Element): void => {
    const input = root.querySelector("textarea")!
    const value = input.value as Io

    // TODO: FEATURE ADJUST, READY TO GO: DON'T NOT RE-RENDER SO MUCH
    //  Actually it should still re-render if:
    //  - You insert whitespace in the middle
    //  - Or cut/paste/del multi chars
    //  - Or end with a semicolon
    if (!WHITESPACE_CHARS.includes(finalElement(value.split(BLANK)))) return

    const display = root.querySelector("div")!
    display.textContent = computeInputSentenceUnicode(value)
}

export {
    transferInputToDisplay,
}
