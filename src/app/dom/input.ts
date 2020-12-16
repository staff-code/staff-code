import {translateInputToDisplay} from "../../translate"
import {INITIAL_STAFF_CODE_INPUT_VALUE} from "./constants"
import {root} from "./root"

const input = document.createElement("textarea")
input.value = INITIAL_STAFF_CODE_INPUT_VALUE
input.addEventListener("keydown", (): void => {
    setTimeout((): void => translateInputToDisplay(root), 100)
})
input.addEventListener("paste", (): void => {
    setTimeout((): void => translateInputToDisplay(root), 100)
})
input.addEventListener("cut", (): void => {
    setTimeout((): void => translateInputToDisplay(root), 100)
})

export {
    input,
}
