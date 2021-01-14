// tslint:disable-next-line comment-format
// language=CSS
import {STANDARD_BORDER, UI_FONT, UI_FONT_SIZE} from "../../constants"

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

    .sc-reference-wrapper a {
        visibility: hidden;
    }

    .sc-reference-wrapper.open a {
        visibility: visible;
    }

    /* title & about */

    .sc-title {
        position: relative;
        cursor: default;
    }

    .sc-title .sc-about {
        display: none;
        background-color: white;
        border: ${STANDARD_BORDER};
        font-family: ${UI_FONT};
        font-size: ${UI_FONT_SIZE}em;
        padding: 0.5em;
        position: absolute;
        right: -3px;
        bottom: 18px;
        width: 150px;
        z-index: 9999;
    }

    .sc-title:hover .sc-about {
        display: block;
    }
`

export {
    REFERENCE_BANNER_CSS,
}
