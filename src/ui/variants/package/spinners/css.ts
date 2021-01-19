import {formatEm, formatPx} from "@sagittal/general"
import {LIGHT_TAN, STANDARD_BORDER, STANDARD_BORDER_RADIUS, UI_FONT, UI_FONT_SIZE, UI_SPACING} from "../constants"

// tslint:disable-next-line comment-format
// language=CSS
const SPINNER_CSS = `
    .sc-spinner {
        display: inline-block;
        margin: 2px ${formatPx(UI_SPACING)} 0 0;
    }

    .sc-spinner label {
        width: 2em;
        display: inline-block;
        font-family: ${UI_FONT};
        font-size: ${formatEm(UI_FONT_SIZE)};
    }

    .sc-spinner input {
        width: 3em;
        border: ${STANDARD_BORDER};
        border-radius: ${formatPx(STANDARD_BORDER_RADIUS)};
        padding: 2px;
    }

    .sc-spinner input:focus {
        outline-color: ${LIGHT_TAN};
    }
`

export {
    SPINNER_CSS,
}
