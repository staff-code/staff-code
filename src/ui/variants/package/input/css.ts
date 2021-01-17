import {Px} from "@sagittal/general"
import {
    LIGHT_TAN,
    MAX_APP_WIDTH,
    MONOSPACED_FONT,
    MONOSPACED_FONT_SIZE,
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
} from "../constants"

const ABOUT_THREE_LINES_HIGH_PX: Px = 60 as Px

// tslint:disable-next-line comment-format
// language=CSS
const INPUT_CSS = `
    .sc-input {
        width: 100%;
        max-width: ${MAX_APP_WIDTH}px;
        resize: vertical;
        height: ${ABOUT_THREE_LINES_HIGH_PX}px;
        font-family: ${MONOSPACED_FONT};
        font-size: ${MONOSPACED_FONT_SIZE}px;
        border: ${STANDARD_BORDER};
        border-radius: ${STANDARD_BORDER_RADIUS}px;
        margin-bottom: 5px;
        box-sizing: border-box;
    }

    .sc-input:focus {
        outline-color: ${LIGHT_TAN};
    }
`

export {
    INPUT_CSS,
}
