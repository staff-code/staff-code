import {doOnNextEventLoop, Io, Ms} from "@sagittal/general"
import {setupInput} from "../../input"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeOptions} from "../../types"
import {handleKeydown, handleKeyup} from "./key"

const INITIAL_STAFF_CODE_INPUT_VALUE = "ston Gcl ; " as Io

const buildPackageInput = (root: HTMLSpanElement, options: StaffCodeOptions): HTMLTextAreaElement => {
    const {interactive, initialText = INITIAL_STAFF_CODE_INPUT_VALUE, callback} = options

    const input = document.createElement("textarea")

    setupInput(input, {interactive, initialText})

    input.addEventListener("keydown", (event: KeyboardEvent): void => handleKeydown(event, root, input, callback))
    input.addEventListener("keyup", handleKeyup)
    input.addEventListener("paste", (): void => {
        doOnNextEventLoop((): void => transferInputToDisplay(root, {callback}), 100 as Ms).then()
    })
    input.addEventListener("cut", (): void => {
        doOnNextEventLoop((): void => transferInputToDisplay(root, {callback}), 100 as Ms).then()
    })

    return input
}

export {
    buildPackageInput,
}
