import {doOnNextEventLoop, Io, Ms} from "@sagittal/general"
import {Code} from "../../../translate"
import {setupInput} from "../../input"
import {transferInputToDisplay} from "../../transfer"
import {handleKeydown, handleKeyup} from "./key"

const INITIAL_STAFF_CODE_INPUT_VALUE = `${Code[Code[`ston`]]} ${Code[Code[`Gcl`]]} ${Code[Code[`;`]]} ` as Io

const buildPackageInput = (root: HTMLDivElement): HTMLTextAreaElement => {
    const input = document.createElement("textarea")

    input.value = INITIAL_STAFF_CODE_INPUT_VALUE
    input.style.display = "block"

    setupInput(input)

    input.addEventListener("keydown", (event: KeyboardEvent): void => handleKeydown(event, root, input))
    input.addEventListener("keyup", handleKeyup)
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
