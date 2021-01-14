// tslint:disable-next-line comment-format
// language=CSS
import {STANDARD_BORDER, STANDARD_BORDER_RADIUS, UI_FONT, UI_FONT_SIZE} from "../../constants"

const REFERENCE_BANNER_CSS = `
    .sc-reference-banner {
        padding: 3px;
        font-family: ${UI_FONT};
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .sc-reference-expander {
        cursor: pointer;
    }

    .sc-reference-expander img {
        height: 0.6em;
        padding-right: 2px;
    }

    .sc-reference-wrapper.open .sc-reference-expander img {
        transform: rotate(90deg);
    }

    .sc-back-to-top {
        visibility: hidden;
    }

    .sc-reference-wrapper.open .sc-back-to-top {
        visibility: visible;
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
        position: absolute;
        right: 0px;
        bottom: 25px;
        z-index: 9999;
    }

    .sc-about-trigger {
        position: absolute;
        top: -30px;
        left: -25px;
        width: 100px;
        height: 50px;
    }

    .sc-about-trigger:hover .sc-about {
        display: block;
    }
`

export {
    REFERENCE_BANNER_CSS,
}
