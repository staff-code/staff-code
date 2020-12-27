import {Px} from "@sagittal/general"

const ABOUT_FORTY_CHARS_WIDE_PX: Px = 300 as Px
const ABOUT_THIRTEEN_LINES_HIGH_PX: Px = 200 as Px

const setupInput = (input: HTMLTextAreaElement): void => {
    input.style.width = `${ABOUT_FORTY_CHARS_WIDE_PX}px`
    input.style.height = `${ABOUT_THIRTEEN_LINES_HIGH_PX}px`
    input.classList.add("input")
}

export {
    setupInput,
}
