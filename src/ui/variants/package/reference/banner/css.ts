import {
    APP_MARGIN,
    DARK_TAN,
    MONOSPACED_FONT,
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
    UI_FONT,
    UI_FONT_SIZE,
} from "../../constants"

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_BANNER_CSS = `
    /* banner */

    .sc-reference-banner {
        padding: 3px;
        font-family: ${UI_FONT};
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: ${STANDARD_BORDER};
        margin-right: ${APP_MARGIN}px;
        min-height: 1.5em;
    }

    /* expander */

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

    /* back to top */

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

    /* title & about */

    .sc-title {
        position: relative;
        cursor: default;
    }

    .sc-about {
        display: none;
        width: max-content;
        background-color: white;
        border: ${STANDARD_BORDER};
        border-radius: ${STANDARD_BORDER_RADIUS}px;
        font-family: ${UI_FONT};
        font-size: ${UI_FONT_SIZE}em;
        padding: 1.5em;
        position: fixed;
        margin: -122px -103px;
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

export {
    REFERENCE_BANNER_CSS,
}
