// tslint:disable-next-line comment-format
// language=CSS
import {STANDARD_BORDER, STANDARD_BORDER_RADIUS, UI_FONT, UI_FONT_SIZE} from "../../constants"

const REFERENCE_BANNER_CSS = `
    /* banner */
    
    .sc-reference-banner {
        padding: 3px;
        font-family: ${UI_FONT};
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: ${STANDARD_BORDER};
    }
    
    /* expander */

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
    
    /* back to top */

    .sc-back-to-top {
        visibility: hidden;
    }

    .sc-reference-wrapper.open .sc-back-to-top {
        visibility: visible;
        color: inherit;
        text-decoration: inherit;
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
        right: 0;
        bottom: 25px;
        z-index: 9999;
    }

    .sc-about-trigger {
        position: absolute;
        top: -15px;
        left: -25px;
        width: 100px;
        height: 35px;
    }

    .sc-about-trigger:hover .sc-about {
        display: block;
    }
`

export {
    REFERENCE_BANNER_CSS,
}
