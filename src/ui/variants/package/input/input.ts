import {doOnNextEventLoop, Ms, Px} from "@sagittal/general"
import {transferInputToDisplay} from "../../../transfer"
import {staffCodeOptions} from "../globals"
import {buildStaffCodeCallback} from "./callback"
import {handleKeydown, handleKeyup} from "./handlers"

const ABOUT_FORTY_CHARS_WIDE_PX: Px = 300 as Px
const ABOUT_THREE_LINES_HIGH_PX: Px = 50 as Px

const buildPackageInput = (): HTMLTextAreaElement => {
    const {initial: {codes: initialCodes}, ui: {interactive}} = staffCodeOptions

    const input = document.createElement("textarea")

    const {callback} = staffCodeOptions
    staffCodeOptions.callback = buildStaffCodeCallback(callback)

    input.classList.add("input")
    input.value = `${initialCodes}${input.value}`
    input.spellcheck = false

    if (!interactive) {
        input.style.display = "none"
    } else {
        input.style.display = "block"

        input.style.width = `${ABOUT_FORTY_CHARS_WIDE_PX}px`
        input.style.height = `${ABOUT_THREE_LINES_HIGH_PX}px`

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
