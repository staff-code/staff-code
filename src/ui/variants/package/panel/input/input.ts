import {components, staffCodeConfig} from "../../globals"
import {buildStaffCodeCallback} from "./callback"
import {handleInput, handleKeydown, handleKeyup} from "./handlers"

// TODO: FEATURE IMPROVE, DO NOT DO: BLINKING CURSOR
//  But I'm not super into the blinking-cursor-only-right-after-the-CSP idea,
//  Even though I think I suggested something like that myself a while back.
//  It's just that... the CSP is still "on" even after that first position.
//  There's nothing special, really, functionally anyway, about that first time.
//  So I think you've got to either always have it or never have it.
//  We could have a blinking cursor at the current position, both vertically and horizontally,
//  Which might help coax people into understanding advance, too, if they saw that after they inserted
//  A notehead, the cursor was still on the left side of it, so it would be obvious if they typed
//  Something else right now they'd be typing over it.
//  - Okay he says not to do it

const buildPackageInput = (): HTMLDivElement => {
    const {initial: {codes: initialCodes}, gui: {interactive}} = staffCodeConfig

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
        input.addEventListener("input", handleInput)

        input.selectionStart = input.value.length
        input.selectionEnd = input.value.length
    }

    return inputBorderWrapper
}

export {
    buildPackageInput,
}
