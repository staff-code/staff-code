import {Decimal, Em, Multiplier} from "@sagittal/general"
import {StaffCodeOptions} from "./types"

const FONT_SIZE = 2.5 as Em
const INLINE_FONT_SIZE = 1 as Em
const DEFAULT_LINE_HEIGHT_MULTIPLIER = 2 as Multiplier<Em>
const MARGIN_SIZE = 1 as Em
const HORIZONTAL_MARGIN_MULTIPLIER = 1 / 8 as Multiplier<Em>

const buildDisplay = (options: StaffCodeOptions = {}): HTMLElement => {
    const {font, lineHeight, inline = false, size = 1 as Decimal<{integer: true}>} = options

    const display = document.createElement(inline ? "span" : "div")
    if (inline) display.style.display = "inline-block"
    display.style.fontSize = `${size * (inline ? INLINE_FONT_SIZE : FONT_SIZE)}em`
    display.style.lineHeight = `${lineHeight || DEFAULT_LINE_HEIGHT_MULTIPLIER}`
    if (!inline) display.style.margin = `${MARGIN_SIZE}em ${MARGIN_SIZE * HORIZONTAL_MARGIN_MULTIPLIER}em`
    display.style.fontFamily = font || "Bravura Text BB"
    display.style.whiteSpace = "pre"
    display.classList.add("display")

    return display
}

export {
    DEFAULT_LINE_HEIGHT_MULTIPLIER,
    buildDisplay,
}
