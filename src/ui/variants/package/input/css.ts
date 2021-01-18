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
    .sc-input-border-wrapper {
        border: ${STANDARD_BORDER};
        border-radius: ${STANDARD_BORDER_RADIUS}px;
        box-sizing: border-box;
        overflow: hidden;
        width: 100%;
        max-width: ${MAX_APP_WIDTH}px;
        margin-bottom: 5px;
        padding: 0;
        display: inherit;
    }

    .sc-input-border-wrapper:focus {
        border-color: ${LIGHT_TAN};
    }
    
    .sc-input {
        min-height: ${ABOUT_THREE_LINES_HIGH_PX}px;
        resize: vertical;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border-radius: ${STANDARD_BORDER_RADIUS}px;
        border: none;
        outline: none;
        margin: 0;
        font-family: ${MONOSPACED_FONT};
        font-size: ${MONOSPACED_FONT_SIZE}px;
    }
`

export {
    INPUT_CSS,
}
