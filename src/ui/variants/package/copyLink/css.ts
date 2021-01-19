import {formatEm, formatPx} from "@sagittal/general"
import {
    GREY,
    LIGHT_GREY,
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
    UI_FONT,
    UI_FONT_SIZE,
    UI_SPACING,
} from "../constants"

// tslint:disable-next-line comment-format
// language=CSS
const COPY_LINK_CSS = `
    .sc-copy-link {
        margin: 2px ${formatPx(UI_SPACING)} 2px 0;
        cursor: pointer;
        font-family: ${UI_FONT};
        font-size: ${formatEm(UI_FONT_SIZE)};
        border: none;
        color: white;
        background-color: ${GREY};
        padding: 4px 6px 3px 6px;
        border-radius: ${formatPx(STANDARD_BORDER_RADIUS)};
        outline: none;
        position: relative;
    }

    .sc-copy-link:hover {
        background-color: ${LIGHT_GREY};
    }

    .sc-copy-link:active {
        background-color: ${GREY};
    }

    .sc-copy-link-message {
        display: none;
    }

    .sc-copy-link-message.active {
        display: block;
        position: absolute;
        background-color: white;
        border: ${STANDARD_BORDER};
        border-radius: ${formatPx(STANDARD_BORDER_RADIUS)};
        top: 35px;
        left: -35px;
        width: max-content;
        padding: 1.5em;
        color: black;
    }
`

export {
    COPY_LINK_CSS,
}
