import {STANDARD_BORDER, STANDARD_BORDER_RADIUS, UI_FONT, UI_FONT_SIZE} from "../constants"
import {ABOUT_FORTY_FIVE_CHARS_WIDE_PX, INPUT_PADDING} from "../input"
import {REFERENCE_SECTION_CSS} from "./section"

// TODO: I really want the two right-hand corners of the Reference
//  (which are also the right-hand corners of the scrollbar)
//  To have the same radius that the two left-hand corners of the Reference

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_WRAPPER_CSS = `
    .sc-reference-wrapper {
        width: 100%;
        max-width: ${ABOUT_FORTY_FIVE_CHARS_WIDE_PX}px;
        padding: ${INPUT_PADDING}px;
    }

    .sc-reference-wrapper.open {
        max-width: 600px;
    }

    .sc-reference-wrapper.open .sc-reference {
        height: 432px;
        padding: 20px 10px;
        overflow-y: auto;
    }

    .sc-reference {
        background-color: white;
        height: 0;
        overflow-y: hidden;
        box-sizing: border-box;
    }

    .sc-reference-border-wrapper {
        overflow-x: hidden;
        border: ${STANDARD_BORDER};
        border-radius: ${STANDARD_BORDER_RADIUS}px;
    }
`

// tslint:disable-next-line comment-format
// language=CSS
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
        width: 120px;
        text-align: right;
        z-index: 9999;
    }

    .sc-title:hover .sc-about {
        display: block;
    }
`

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_TOC_CSS = `
    .sc-reference ul {
        list-style: none;
        padding: 0;
        margin: 0 0 30px 0;
    }
`

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_GENERAL_CSS = `
    .sc-reference h3 {
        display: inline-block;
        padding-right: 10px;
        margin: 0 0 5px 0;
    }
`

const REFERENCE_CSS = `
    ${REFERENCE_WRAPPER_CSS}
    ${REFERENCE_BANNER_CSS}
    ${REFERENCE_TOC_CSS}
    ${REFERENCE_GENERAL_CSS}
    ${REFERENCE_SECTION_CSS}
`

export {
    REFERENCE_CSS,
}
