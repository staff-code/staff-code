import {TAN, STANDARD_BORDER_RADIUS, DARK_TAN, UI_FONT, UI_FONT_SIZE} from "../constants"

// tslint:disable-next-line comment-format
// language=CSS
const DOWNLOAD_CSS = `
    .sc-download {
        margin: 2px 0;
        cursor: pointer;
        font-family: ${UI_FONT};
        font-size: ${UI_FONT_SIZE}em;
        border: none;
        color: white;
        background-color: ${DARK_TAN};
        padding: 4px 6px 3px 6px;
        border-radius: ${STANDARD_BORDER_RADIUS}px;
        outline: none;
    }

    .sc-download:hover {
        background-color: ${TAN};
    }

    .sc-download:active {
        background-color: ${DARK_TAN};
    }

    .sc-download svg {
        height: 1em;
        vertical-align: middle;
        margin-right: -3px;
    }

    .sc-svg {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    .sc-cloned-svg {
        position: relative;
        top: 0;
        left: 0;
    }
`

export {
    DOWNLOAD_CSS,
}
