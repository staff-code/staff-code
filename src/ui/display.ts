import {Em, Multiplier} from "@sagittal/general"
import {DisplayOptions} from "./types"

const DEFAULT_BLOCK_MODE_FONT_SIZE = 2.5 as Em
const DEFAULT_INLINE_MODE_FONT_SIZE = 1 as Em
const MARGIN_SIZE = 1 as Em
const HORIZONTAL_MARGIN_MULTIPLIER = 1 / 8 as Multiplier<Em>

const buildDisplay = ({font, initialLine, inline, initialSize}: DisplayOptions): HTMLElement => {
    const display = document.createElement(inline ? "span" : "div")
    if (inline) display.style.display = "inline-block"
    display.style.fontSize = `${initialSize * (inline ? DEFAULT_INLINE_MODE_FONT_SIZE : DEFAULT_BLOCK_MODE_FONT_SIZE)}em`
    display.style.lineHeight = `${initialLine}`
    if (!inline) display.style.margin = `${MARGIN_SIZE}em ${MARGIN_SIZE * HORIZONTAL_MARGIN_MULTIPLIER}em`
    display.style.fontFamily = font
    display.style.whiteSpace = "pre"
    display.classList.add("display")

    return display
}

export {
    buildDisplay,
    DEFAULT_BLOCK_MODE_FONT_SIZE,
}
