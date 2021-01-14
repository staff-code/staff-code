import {
    MONOSPACED_FONT,
    MONOSPACED_FONT_SIZE,
    STANDARD_BORDER,
    STANDARD_BORDER_RADIUS,
    UI_FONT,
    UI_FONT_SIZE,
} from "../constants"
import {ABOUT_FORTY_FIVE_CHARS_WIDE_PX, INPUT_PADDING} from "../input"

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
        border: ${STANDARD_BORDER};
        border-radius: ${STANDARD_BORDER_RADIUS}px;
    }

    .sc-reference {
        background: white;
        height: 0;
        overflow-y: hidden;
        box-sizing: border-box;
    }
`

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_BANNER_CSS = `
    .sc-reference-banner {
        padding: 3px;
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

    /* title & about */

    .sc-title {
        float: right;
        font-weight: bold;
        position: relative;
        cursor: default;
    }

    .sc-title .sc-about {
        display: none;
        background: white;
        border: ${STANDARD_BORDER};
        font-weight: normal;
        font-family: ${UI_FONT};
        font-size: ${UI_FONT_SIZE}em;
        padding: 0.5em;
        position: absolute;
        right: 0;
        width: 200px;
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
    ul {
        list-style: none;
        padding: 0;
        margin: 0 0 30px 0;
    }
`

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_SECTION_TITLE_CSS = `
    .sc-section-title {
        position: relative;
    }

    .sc-section-anchor {
        position: absolute;
    }

    /* intro */

    .sc-section-intro {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .sc-section-title h3 {
        display: inline-block;
        padding-right: 10px;
        margin: 0 0 5px 0;
    }

    .sc-section-intro a {
        display: inline-block;
        white-space: nowrap;
        padding-left: 10px;
    }

    /* explanation */

    .sc-section-explanation {
        padding: 10px 0;
    }
`

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_TABLE_CSS = `
    table {
        border-collapse: collapse;
        margin-bottom: 30px;
    }

    /* row */

    tr {
        cursor: pointer;
    }

    table tr:hover {
        background-color: #eeeeee;
    }

    table tr.no-code {
        background-color: inherit;
        cursor: auto;
    }

    /* glyph cell */

    tr:nth-child(even) td:nth-child(1) {
        text-align: left;
        padding-left: 0.33em;
    }

    tr:nth-child(odd) td:nth-child(1) {
        text-align: right;
        padding-right: 1.33em;
    }

    td:nth-child(1) {
        padding: 2px 5px;
        font-family: Bravura Text BB;
        font-size: 1.6666em;
        width: 1.1111em;
        text-align: center;
        line-height: 0.75; /* so that they don't massively increase height of the rows */
    }

    /* code cell */

    td:nth-child(2) {
        font-family: ${MONOSPACED_FONT};
        border: ${STANDARD_BORDER};
        font-size: ${MONOSPACED_FONT_SIZE}px;
        padding: 0 3px;
    }

    /* mnemonic cell */

    td:nth-child(3) {
        border: ${STANDARD_BORDER};
        padding: 0 3px;
    }
`

const REFERENCE_CSS = `
    ${REFERENCE_WRAPPER_CSS}
    ${REFERENCE_BANNER_CSS}
    ${REFERENCE_TOC_CSS}
    ${REFERENCE_SECTION_TITLE_CSS}
    ${REFERENCE_TABLE_CSS}
`

export {
    REFERENCE_CSS,
}
