import {Em, FontName, Px} from "@sagittal/general"

const EGGSHELL = "#FAF8F6"
const IVORY = "#DEC89C"
const LIGHT_TAN = "#C99A68"
const TAN = "#B37E43"
const LIGHT_EBONY = "#94937D"
const EBONY = "#6C6B59"
const DARK_EBONY = "#333333"

const STANDARD_BORDER = `1px solid ${LIGHT_EBONY}`
const STANDARD_BORDER_RADIUS = 3 as Px

const MONOSPACED_FONT = "Roboto Mono" as FontName
const MONOSPACED_FONT_SIZE = 13 as Px

const UI_FONT = "sans-serif"
const UI_FONT_SIZE = 0.75 as Em
const UI_SPACING = 12 as Px

// TODO: CLEAN, READY TO GO: STOP HAVING TO REMEMBER TO SUFFIX EM OR PX
//  Add helpers for formatting px and em (in @sagittal/general)
const MAX_APP_WIDTH = 600 as Px

const APP_MARGIN = 16 as Px

export {
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
    LIGHT_TAN,
    TAN,
    EBONY,
    LIGHT_EBONY,
    IVORY,
    EGGSHELL,
    DARK_EBONY,
    MONOSPACED_FONT_SIZE,
    MONOSPACED_FONT,
    UI_FONT,
    UI_FONT_SIZE,
    UI_SPACING,
    MAX_APP_WIDTH,
    APP_MARGIN,
}
