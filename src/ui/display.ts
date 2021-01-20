import {Css, Em, formatEm, Multiplier, multiply} from "@sagittal/general"
import {DisplayOptions, InitialFontSizeOptions} from "./types"

const BLOCK_MODE_BASE_FONT_SIZE = 2.5 as Em
const INLINE_MODE_BASE_FONT_SIZE = 1 as Em
const MARGIN_SIZE = 1 as Em
const HORIZONTAL_MARGIN_MULTIPLIER = 1 / 8 as Multiplier<Em>

const computeInitialFontSize = ({inline, initialSize}: InitialFontSizeOptions): Css => {
    const baseFontSize = inline ? INLINE_MODE_BASE_FONT_SIZE : BLOCK_MODE_BASE_FONT_SIZE
    const fontSize = multiply(baseFontSize, initialSize)

    console.log("final font size", formatEm(fontSize), fontSize, baseFontSize, inline, initialSize)

    return formatEm(fontSize) as Css
}

const buildDisplay = ({font, initialLine, inline, initialSize}: DisplayOptions): HTMLElement => {
    console.log("do they make it this far? 3) buildDisplay", initialSize, initialLine)

    console.log("final line", JSON.stringify(initialLine))

    const display = document.createElement(inline ? "span" : "div")
    if (inline) display.style.display = "inline-block"
    display.style.fontSize = computeInitialFontSize({inline, initialSize})
    display.style.lineHeight = JSON.stringify(initialLine)
    if (!inline) {
        display.style.padding = `0 ${formatEm(multiply(MARGIN_SIZE, HORIZONTAL_MARGIN_MULTIPLIER))}`
    }
    display.style.fontFamily = font
    display.style.whiteSpace = "pre"
    display.style.color = "black"
    display.classList.add("sc-display")

    return display
}

export {
    buildDisplay,
    BLOCK_MODE_BASE_FONT_SIZE,
    MARGIN_SIZE,
}
