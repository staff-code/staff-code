import {formatPx} from "@sagittal/general"
import {APP_MARGIN, MAX_APP_WIDTH, STANDARD_BORDER, STANDARD_BORDER_RADIUS} from "../constants"
import {REFERENCE_BANNER_CSS} from "./banner"
import {REFERENCE_SECTION_CSS} from "./section"
import {REFERENCE_TOC_CSS} from "./toc"

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_WRAPPER_CSS = `
    .sc-reference-wrapper {
        width: 100%;
        max-width: ${formatPx(MAX_APP_WIDTH)};
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .sc-reference-border-wrapper::-webkit-scrollbar {
        display: none;
    }

    .sc-reference-wrapper.open .sc-reference-border-wrapper {
        flex-grow: 1;
        margin: 0 ${formatPx(APP_MARGIN)} ${formatPx(APP_MARGIN)} 0;
        overflow-y: scroll;
        scrollbar-width: none;
        border: ${STANDARD_BORDER};
        border-radius: ${formatPx(STANDARD_BORDER_RADIUS)};
    }

    .sc-reference {
        background-color: white;
        height: 0;
        overflow: hidden;
        box-sizing: border-box;
    }

    .sc-reference-wrapper.open .sc-reference {
        padding: 10px;
        overflow-y: scroll;
        height: 100%;
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
