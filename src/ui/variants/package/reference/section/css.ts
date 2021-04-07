import {formatPx} from "@sagittal/general"
import {BRAVURA_TEXT_SC} from "../../../../constants"
import {MONOSPACED_FONT, MONOSPACED_FONT_SIZE, STANDARD_BORDER} from "../../constants"

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_SECTION_TITLE_CSS = `
    .sc-section-title {
        position: relative;
    }

    .sc-section-anchor {
        position: absolute;
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

    .sc-section-explanation span {
        font-family: ${MONOSPACED_FONT};
        font-size: ${formatPx(MONOSPACED_FONT_SIZE)};
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
        font-family: ${BRAVURA_TEXT_SC};
        font-size: 1.6666em;
        width: 1.1111em;
        text-align: center;
        line-height: 0.75; /* so that they don't massively increase height of the rows */
    }

    /* code cell */

    td:nth-child(2) {
        font-family: ${MONOSPACED_FONT};
        border: ${STANDARD_BORDER};
        font-size: ${formatPx(MONOSPACED_FONT_SIZE)};
        padding: 0 3px;
    }

    /* mnemonic cell */

    td:nth-child(3) {
        border: ${STANDARD_BORDER};
        padding: 0 3px;
    }

    td:nth-child(3) u {
        text-decoration-skip-ink: none;
    }
`

const REFERENCE_SECTION_CSS = `
    ${REFERENCE_SECTION_TITLE_CSS}
    ${REFERENCE_TABLE_CSS}
`
export {
    REFERENCE_SECTION_CSS,
}
