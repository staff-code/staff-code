import {Px} from "@sagittal/general"
import {
    MONOSPACED_FONT,
    MONOSPACED_FONT_SIZE,
    OUTLINE_LIGHT_BLUE,
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
} from "../constants"

const ABOUT_FORTY_FIVE_CHARS_WIDE_PX: Px = 340 as Px
const ABOUT_THREE_LINES_HIGH_PX: Px = 55 as Px
const INPUT_PADDING = 2 as Px

// tslint:disable-next-line comment-format
// language=CSS
const INPUT_CSS = `
    .sc-input {
        width: ${ABOUT_FORTY_FIVE_CHARS_WIDE_PX}px;
        height: ${ABOUT_THREE_LINES_HIGH_PX}px;
        font-family: ${MONOSPACED_FONT};
        font-size: ${MONOSPACED_FONT_SIZE}px;
        border: ${STANDARD_BORDER};
        border-radius: ${STANDARD_BORDER_RADIUS}px;
        margin-bottom: 5px;
        padding: ${INPUT_PADDING}px;
    }

    .sc-input:focus {
        outline-color: ${OUTLINE_LIGHT_BLUE};
    }
`

export {
    ABOUT_FORTY_FIVE_CHARS_WIDE_PX,
    INPUT_CSS,
    INPUT_PADDING,
}
