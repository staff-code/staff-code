import {Em, Multiplier} from "@sagittal/general"
import {StaffCodeOptions} from "./types"

const FONT_SIZE = 2.5 as Em
const INLINE_FONT_SIZE = 1 as Em
const DEFAULT_LINE_HEIGHT_MULTIPLIER = 2 as Multiplier<Em>
const MARGIN_SIZE = 1 as Em

const buildDisplay = (inline: boolean = false, {font, lineHeight}: StaffCodeOptions = {}): HTMLElement => {
    const display = document.createElement(inline ? "span" : "div")
    display.style.fontSize = `${inline ? INLINE_FONT_SIZE : FONT_SIZE}em`
    display.style.lineHeight = `${lineHeight || DEFAULT_LINE_HEIGHT_MULTIPLIER}`
    display.style.margin = `${MARGIN_SIZE}em 0`
    display.style.fontFamily = font || "Bravura Text BB"
    display.style.whiteSpace = "pre"
    display.classList.add("display")

    return display
}

export {
    DEFAULT_LINE_HEIGHT_MULTIPLIER,
    buildDisplay,
}
