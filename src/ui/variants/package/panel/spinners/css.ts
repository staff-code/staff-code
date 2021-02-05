import {formatEm, formatPx} from "@sagittal/general"
import {GUI_FONT, GUI_FONT_SIZE, GUI_SPACING, LIGHT_TAN, STANDARD_BORDER, STANDARD_BORDER_RADIUS} from "../../constants"

// tslint:disable-next-line comment-format
// language=CSS
const SPINNER_CSS = `
    .sc-spinner {
        display: inline-block;
        margin: 2px ${formatPx(GUI_SPACING)} 0 0;
    }

    .sc-spinner label {
        width: 2em;
        display: inline-block;
        font-family: ${GUI_FONT};
        font-size: ${formatEm(GUI_FONT_SIZE)};
    }

    .sc-spinner input {
        outline: none;
        width: 3em;
        border: ${STANDARD_BORDER};
        border-radius: ${formatPx(STANDARD_BORDER_RADIUS)};
        padding: 2px;
    }

    .sc-spinner input:focus {
        border-color: ${LIGHT_TAN};
    }
`

export {
    SPINNER_CSS,
}
