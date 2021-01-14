import {OUTLINE_LIGHT_BLUE, STANDARD_BORDER, STANDARD_BORDER_RADIUS, UI_FONT, UI_FONT_SIZE} from "../constants"

// tslint:disable-next-line comment-format
// language=CSS
const SPINNER_CSS = `
    .sc-spinner {
        display: inline-block;
        margin-right: 5px;
    }

    .sc-spinner label {
        width: 2em;
        display: inline-block;
        font-family: ${UI_FONT};
        font-size: ${UI_FONT_SIZE}em;
    }

    .sc-spinner input {
        width: 3em;
        border: ${STANDARD_BORDER};
        border-radius: ${STANDARD_BORDER_RADIUS}px;
        padding: 2px;
    }

    .sc-spinner input:focus {
        outline-color: ${OUTLINE_LIGHT_BLUE};
    }
`

export {
    SPINNER_CSS,
}
