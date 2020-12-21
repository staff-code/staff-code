import {doOnNextEventLoop, Io, Ms} from "@sagittal/general"
import {Code} from "../../../translate"
import {transferInputToDisplay} from "../../transfer"

// TODO: FEATURE IMPROVE, BLOCKED: OPEN OR CLOSED INITIAL STAFF?
//  Should include a barline before the clef
//  Waiting for Dave's reply
const INITIAL_STAFF_CODE_INPUT_VALUE = `${Code[Code[`st`]]} ${Code[Code[`tbcf`]]} ${Code[Code[`;`]]} ` as Io

const buildPackageInput = (root: HTMLDivElement): HTMLTextAreaElement => {
    const input = document.createElement("textarea")
    input.value = INITIAL_STAFF_CODE_INPUT_VALUE
    input.addEventListener("keydown", (): void => {
        doOnNextEventLoop((): void => {
            // TODO: BUG, READY TO GO: THIS SHOULD NOT FIRE IF YOU'RE HOLDING DOWN CTRL, ABOUT TO PASTE
            //  I think it should only fire if it's any character that might possibly be a code
            //  Or wait, maybe it only fires if it's a space! Then we don't even have to do special parsing
            //  - Here's the old task for "do not re-render until pushing a space"
            //  - But then you have to remember to add a space to the BBCode variant at the end
            //  Or it won't render the last codeword
            //  - But make sure that plays well with the terminal Smart Advance `inputWords.push(Code[Code[`;`]])` below
            //  - Oh yeah, and it ought to be space, tab, or return, since all whitespace really should trigger it
            transferInputToDisplay(root)
        }, 100 as Ms).then()
    })
    input.addEventListener("paste", (): void => {
        doOnNextEventLoop((): void => transferInputToDisplay(root), 100 as Ms).then()
    })
    input.addEventListener("cut", (): void => {
        doOnNextEventLoop((): void => transferInputToDisplay(root), 100 as Ms).then()
    })

    return input
}

export {
    buildPackageInput,
}
