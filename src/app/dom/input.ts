import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {translateInputToDisplay} from "../../translate"
import {INITIAL_STAFF_CODE_INPUT_VALUE} from "./constants"
import {root} from "./root"

const input = document.createElement("textarea")
input.value = INITIAL_STAFF_CODE_INPUT_VALUE
input.addEventListener("keydown", (): void => {
    doOnNextEventLoop((): void => translateInputToDisplay(root), 100 as Ms).then()
})
input.addEventListener("paste", (): void => {
    doOnNextEventLoop((): void => translateInputToDisplay(root), 100 as Ms).then()
})
input.addEventListener("cut", (): void => {
    doOnNextEventLoop((): void => translateInputToDisplay(root), 100 as Ms).then()
})

export {
    input,
}
