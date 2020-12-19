import {doOnNextEventLoop, Io, Ms} from "@sagittal/general"
import {Code} from "../../../translate"
import {transferInputToDisplay} from "../../transfer"

const INITIAL_STAFF_CODE_INPUT_VALUE = `${Code[Code[`st`]]} ${Code[Code[`tbcf`]]} ${Code[Code[`;`]]} ` as Io

const buildPackageInput = (root: HTMLDivElement): HTMLTextAreaElement => {
    const input = document.createElement("textarea")
    input.value = INITIAL_STAFF_CODE_INPUT_VALUE
    input.addEventListener("keydown", (): void => {
        doOnNextEventLoop((): void => transferInputToDisplay(root), 100 as Ms).then()
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
