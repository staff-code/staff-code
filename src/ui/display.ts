import {Em, Multiplier} from "@sagittal/general"
import {StaffCodeOptions} from "./types"

const FONT_SIZE = 2.5 as Em
const INLINE_FONT_SIZE = 1 as Em
const DEFAULT_LINE_HEIGHT_MULTIPLIER = 2 as Multiplier<Em>
const MARGIN_SIZE = 1 as Em
const HORIZONTAL_MARGIN_MULTIPLIER = 1 / 8 as Multiplier<Em>

const buildDisplay = (inline: boolean = false, {font, lineHeight}: StaffCodeOptions = {}): HTMLElement => {
    const display = document.createElement(inline ? "span" : "div")
    display.style.fontSize = `${inline ? INLINE_FONT_SIZE : FONT_SIZE}em`
    console.log("checking on line height here too", lineHeight, DEFAULT_LINE_HEIGHT_MULTIPLIER, lineHeight || DEFAULT_LINE_HEIGHT_MULTIPLIER)
    display.style.lineHeight = `${lineHeight || DEFAULT_LINE_HEIGHT_MULTIPLIER}`
    display.style.margin = `${MARGIN_SIZE}em ${MARGIN_SIZE * HORIZONTAL_MARGIN_MULTIPLIER}em`
    display.style.fontFamily = font || "Bravura Text BB"
    display.style.whiteSpace = "pre"
    display.classList.add("display")

    return display
}

export {
    DEFAULT_LINE_HEIGHT_MULTIPLIER,
    buildDisplay,
}
