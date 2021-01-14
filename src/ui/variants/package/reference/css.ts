import {STANDARD_BORDER, STANDARD_BORDER_RADIUS} from "../constants"
import {ABOUT_FORTY_FIVE_CHARS_WIDE_PX, INPUT_PADDING} from "../input"
import {REFERENCE_BANNER_CSS} from "./banner"
import {REFERENCE_SECTION_CSS} from "./section"
import {REFERENCE_TOC_CSS} from "./toc"

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
