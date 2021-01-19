import {Em, FontName, Multiplier, multiply} from "@sagittal/general"
import {DEFAULT_BLOCK_MODE_FONT_SIZE} from "../../display"

const loadGoogleFont = (font: FontName): void => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = `https://fonts.googleapis.com/css?family=${font.replace(/ /g, "+")}`
    document.getElementsByTagName("head")[0].appendChild(link)
}

const computeFontSize = (size: Multiplier<Em>): Em =>
    multiply(DEFAULT_BLOCK_MODE_FONT_SIZE, size)

export {
    loadGoogleFont,
    computeFontSize,
}
