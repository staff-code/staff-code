import {BLANK, Px} from "@sagittal/general"
import {StaffCodeOptions} from "./types"

const ABOUT_FORTY_CHARS_WIDE_PX: Px = 300 as Px
const ABOUT_THIRTEEN_LINES_HIGH_PX: Px = 200 as Px

const setupInput = (input: HTMLTextAreaElement, {interactive, initialText = BLANK}: StaffCodeOptions = {}): void => {
    input.classList.add("input")
    input.value = initialText

    if (!interactive) {
        input.style.display = "none"

        return
    }
    input.style.display = "block"

    input.style.width = `${ABOUT_FORTY_CHARS_WIDE_PX}px`
    input.style.height = `${ABOUT_THIRTEEN_LINES_HIGH_PX}px`
}

export {
    setupInput,
}
