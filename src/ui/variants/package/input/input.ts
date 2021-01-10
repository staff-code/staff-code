import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {transferInputToDisplay} from "../../../transfer"
import {staffCodeOptions} from "../globals"
import {buildStaffCodeCallback} from "./callback"
import {handleKeydown, handleKeyup} from "./handlers"

const buildPackageInput = (): HTMLTextAreaElement => {
    const {initial: {codes: initialCodes}, ui: {interactive}} = staffCodeOptions

    const input = document.createElement("textarea")

    const {callback} = staffCodeOptions
    staffCodeOptions.callback = buildStaffCodeCallback(callback)

    input.classList.add("sc-input")
    input.value = `${initialCodes}${input.value}`
    input.spellcheck = false

    if (!interactive) {
        input.style.display = "none"
    } else {
        input.style.display = "block"

        input.addEventListener("keydown", handleKeydown)
        input.addEventListener("keyup", handleKeyup)
        input.addEventListener("paste", (): void => {
            doOnNextEventLoop(transferInputToDisplay, 100 as Ms).then()
        })
        input.addEventListener("cut", (): void => {
            doOnNextEventLoop(transferInputToDisplay, 100 as Ms).then()
        })
    }

    return input
}

export {
    buildPackageInput,
}
