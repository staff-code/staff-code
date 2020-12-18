import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {transferInputToDisplay} from "../../transfer"
import {INITIAL_STAFF_CODE_INPUT_VALUE} from "./constants"

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
