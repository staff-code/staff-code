import {formatEm, formatPx} from "@sagittal/general"
import {
    GREY,
    GUI_FONT,
    GUI_FONT_SIZE,
    GUI_SPACING,
    LIGHT_GREY,
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
} from "../../constants"

// tslint:disable-next-line comment-format
// language=CSS
const COPY_LINK_CSS = `
    .sc-copy-link {
        margin: 2px ${formatPx(GUI_SPACING)} 2px 0;
        cursor: pointer;
        font-family: ${GUI_FONT};
        font-size: ${formatEm(GUI_FONT_SIZE)};
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
