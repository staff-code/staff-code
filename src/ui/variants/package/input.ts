import {doOnNextEventLoop, Io, Ms} from "@sagittal/general"
import {Code} from "../../../translate"
import {setupInput} from "../../input"
import {transferInputToDisplay} from "../../transfer"

const INITIAL_STAFF_CODE_INPUT_VALUE = `${Code[Code[`ston`]]} ${Code[Code[`tbcf`]]} ${Code[Code[`;`]]} ` as Io

let keydown = false

const buildPackageInput = (root: HTMLDivElement): HTMLTextAreaElement => {
    const input = document.createElement("textarea")
    input.value = INITIAL_STAFF_CODE_INPUT_VALUE
    setupInput(input)
    input.addEventListener("keydown", (): void => {
        keydown = true
        doOnNextEventLoop((): void => {transferInputToDisplay(root)}, 100 as Ms).then()
    })
    input.addEventListener("keyup", (): void => {
        keydown = false
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
