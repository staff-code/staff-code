import {BLANK, doOnNextEventLoop, Ms, Px} from "@sagittal/general"
import {handleKeydown, handleKeyup} from "./key"
import {transferInputToDisplay} from "./transfer"
import {StaffCodeOptions} from "./types"

const ABOUT_FORTY_CHARS_WIDE_PX: Px = 300 as Px
const ABOUT_THIRTEEN_LINES_HIGH_PX: Px = 200 as Px

const setupInput = (
    input: HTMLTextAreaElement,
    root: HTMLSpanElement,
    {interactive, initialText = BLANK, callback}: StaffCodeOptions = {},
): void => {
    input.classList.add("input")
    input.value = `${initialText}${input.value}`

    if (!interactive) {
        input.style.display = "none"

        return
    }
    input.style.display = "block"

    input.style.width = `${ABOUT_FORTY_CHARS_WIDE_PX}px`
    input.style.height = `${ABOUT_THIRTEEN_LINES_HIGH_PX}px`

    input.addEventListener("keydown", (event: KeyboardEvent): void => handleKeydown(event, input, root, {callback}))
    input.addEventListener("keyup", handleKeyup)
    input.addEventListener("paste", (): void => {
        doOnNextEventLoop((): void => transferInputToDisplay(root, {callback}), 100 as Ms).then()
    })
    input.addEventListener("cut", (): void => {
        doOnNextEventLoop((): void => transferInputToDisplay(root, {callback}), 100 as Ms).then()
    })
}

export {
    setupInput,
}
