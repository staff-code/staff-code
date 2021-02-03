import {formatEm, formatPx} from "@sagittal/general"
import {
    APP_MARGIN,
    DARK_GREY,
    DARK_TAN,
    GUI_FONT,
    GUI_FONT_SIZE,
    MONOSPACED_FONT,
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
} from "../../constants"

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_EXPANDER_CSS = `
    .sc-reference-expander {
        cursor: pointer;
    }

    .sc-reference-expander:hover span {
        color: ${DARK_TAN};
    }

    .sc-reference-expander-icon {
        font-weight: bold;
        font-family: ${MONOSPACED_FONT};
        padding-right: 3px;
    }

    .sc-reference-expander-icon::before {
        content: "+";
    }

    .sc-reference-wrapper.open .sc-reference-expander-icon::before {
        content: "-";
    }

    .sc-expander-tooltip {
        display: none;
        width: max-content;
        background-color: white;
        border: ${STANDARD_BORDER};
        border-radius: ${formatPx(STANDARD_BORDER_RADIUS)};
        font-family: ${GUI_FONT};
        font-size: ${formatEm(GUI_FONT_SIZE)};
        padding: 1.5em;
        position: fixed;
        margin: -105px -3px;
        color: ${DARK_GREY} !important;
        z-index: 9999;
    }

    .sc-reference-expander:hover .sc-expander-tooltip {
        display: block;
    }

    .sc-reference-wrapper.open .sc-reference-expander:hover .sc-expander-tooltip {
        display: none;
    }
`

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_BACK_TO_TOP_CSS = `
    .sc-back-to-top {
        visibility: hidden;
    }

    .sc-reference-wrapper.open .sc-back-to-top {
        visibility: visible;
        color: inherit;
        text-decoration: inherit;
    }

    .sc-reference-wrapper.open .sc-back-to-top:hover {
        color: ${DARK_TAN};
    }
`

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_TITLE_AND_ABOUT_CSS = `
    .sc-title {
        position: relative;
        cursor: default;
    }

    .sc-about {
        display: none;
        width: max-content;
        background-color: white;
        border: ${STANDARD_BORDER};
        border-radius: ${formatPx(STANDARD_BORDER_RADIUS)};
        font-family: ${GUI_FONT};
        font-size: ${formatEm(GUI_FONT_SIZE)};
        padding: 1.5em;
        position: fixed;
        margin: -135px -103px;
        z-index: 9999;
    }

    .sc-about-trigger {
        position: fixed;
        margin: -25px -6px;
        height: 30px;
        width: 80px;
    }

    .sc-about-trigger:hover .sc-about {
        display: block;
    }
`

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_BANNER_CSS = `
    .sc-reference-banner {
        padding: 3px;
        font-family: ${GUI_FONT};
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: ${STANDARD_BORDER};
        margin-right: ${formatPx(APP_MARGIN)};
        min-height: 1.5em;
    }

    ${REFERENCE_BACK_TO_TOP_CSS}
    ${REFERENCE_EXPANDER_CSS}
    ${REFERENCE_TITLE_AND_ABOUT_CSS}
`

export {
    REFERENCE_BANNER_CSS,
}
