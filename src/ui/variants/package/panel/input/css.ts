import {formatPx, Px} from "@sagittal/general"
import {
    LIGHT_TAN,
    MAX_APP_WIDTH,
    MONOSPACED_FONT,
    MONOSPACED_FONT_SIZE,
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
} from "../../constants"

const ABOUT_THREE_LINES_HIGH_PX: Px = 60 as Px

// TODO: Oh, I just noticed that the border of the input doesn't
//  Light up when you're interacting with it, like the spinners do.

// tslint:disable-next-line comment-format
// language=CSS
const INPUT_CSS = `
    .sc-input-border-wrapper {
        border: ${STANDARD_BORDER};
        border-radius: ${formatPx(STANDARD_BORDER_RADIUS)};
        box-sizing: border-box;
        overflow: hidden;
        width: 100%;
        max-width: ${formatPx(MAX_APP_WIDTH)};
        margin-bottom: 5px;
        padding: 0;
        display: inherit;
    }

    .sc-input-border-wrapper:focus-within {
        border-color: ${LIGHT_TAN};
    }

    .sc-input {
        min-height: ${formatPx(ABOUT_THREE_LINES_HIGH_PX)};
        resize: vertical;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border-radius: ${formatPx(STANDARD_BORDER_RADIUS)};
        border: none;
        outline: none;
        margin: 0;
        font-family: ${MONOSPACED_FONT};
        font-size: ${formatPx(MONOSPACED_FONT_SIZE)};
    }
`

export {
    INPUT_CSS,
}
