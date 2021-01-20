import {doOnNextEventLoop, Ms} from "@sagittal/general"
import {transferInputToDisplay} from "../../../../transfer"
import {components, staffCodeConfig} from "../../globals"
import {buildStaffCodeCallback} from "./callback"
import {handleKeydown, handleKeyup} from "./handlers"

const buildPackageInput = (): HTMLDivElement => {
    const {initial: {codes: initialCodes}, ui: {interactive}} = staffCodeConfig

    const inputBorderWrapper = document.createElement("div")
    inputBorderWrapper.classList.add("sc-input-border-wrapper")

    const input = document.createElement("textarea")
    components.input = input
    inputBorderWrapper.appendChild(input)

    const {callback} = staffCodeConfig
    staffCodeConfig.callback = buildStaffCodeCallback(callback)

    input.classList.add("sc-input")
    input.value = `${initialCodes}${input.value}`
    input.spellcheck = false

    if (!interactive) {
        input.style.display = "none"
    } else {
        input.style.display = "inline-block"

        input.addEventListener("keydown", handleKeydown)
        input.addEventListener("keyup", handleKeyup)
        input.addEventListener("paste", (): void => {
            doOnNextEventLoop((): void => {
                transferInputToDisplay(components.root, staffCodeConfig.callback)
            }, 100 as Ms).then()
        })
        input.addEventListener("cut", (): void => {
            doOnNextEventLoop((): void => {
                transferInputToDisplay(components.root, staffCodeConfig.callback)
            }, 100 as Ms).then()
        })

        input.selectionStart = input.value.length
        input.selectionEnd = input.value.length
    }

    return inputBorderWrapper
}

export {
    buildPackageInput,
}
