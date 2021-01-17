import {Em, FontName, Px} from "@sagittal/general"

const STANDARD_BORDER = "1px solid #bbbbbb"
const STANDARD_BORDER_RADIUS = 3 as Px

const MONOSPACED_FONT = "Roboto Mono" as FontName
const MONOSPACED_FONT_SIZE = 13 as Px

const UI_FONT = "sans-serif"
const UI_FONT_SIZE = 0.75 as Em
const UI_SPACING = 12 as Px

const OUTLINE_LIGHT_BLUE = "#88bbff"

// TODO: CLEAN, READY TO GO: STOP HAVING TO REMEMBER TO SUFFIX EM OR PX
//  Add helpers for formatting px and em (in @sagittal/general)
const MAX_APP_WIDTH = 600 as Px

const SAGITTAL_FORUM_ORANGE = "#dd6600"

const APP_MARGIN = 16 as Px

// TODO: WARM COLOR SCHEME
//  That completely conflicts with using orange for the links.
//  We could keep the orange links and go totally Sagittal-forum-themed,
//  By having button text and background chosen from the set {white, orange, black}.
//  But let's see what you come up with for a warm classic style.
//  Feel free to change the link colour as well as the button colours.

export {
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
    OUTLINE_LIGHT_BLUE,
    MONOSPACED_FONT_SIZE,
    MONOSPACED_FONT,
    UI_FONT,
    UI_FONT_SIZE,
    UI_SPACING,
    MAX_APP_WIDTH,
    SAGITTAL_FORUM_ORANGE,
    APP_MARGIN,
}
