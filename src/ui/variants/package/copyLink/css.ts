import {STANDARD_BORDER, STANDARD_BORDER_RADIUS, UI_FONT, UI_FONT_SIZE} from "../constants"

// tslint:disable-next-line comment-format
// language=CSS
const COPY_LINK_CSS = `
    .sc-copy-link {
        margin: 2px 5px;
        cursor: pointer;
        font-family: ${UI_FONT};
        font-size: ${UI_FONT_SIZE}em;
        border: none;
        color: white;
        background-color: #0366CC;
        padding: 4px 6px 2px 6px;
        border-radius: ${STANDARD_BORDER_RADIUS}px;
        outline: none;
        position: relative;
    }

    .sc-copy-link:hover {
        background-color: #035FC8;
    }

    .sc-copy-link:active {
        background-color: #0366CC;
    }

    .sc-copy-link-message {
        display: none;
    }

    .sc-copy-link-message.active {
        display: block;
        position: absolute;
        background-color: white;
        border: ${STANDARD_BORDER};
        top: 35px;
        left: -35px;
        width: 130px;
        color: black;
    }
`

export {
    COPY_LINK_CSS,
}
