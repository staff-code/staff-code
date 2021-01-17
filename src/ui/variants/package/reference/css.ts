import {APP_MARGIN, MAX_APP_WIDTH, STANDARD_BORDER, STANDARD_BORDER_RADIUS} from "../constants"
import {REFERENCE_BANNER_CSS} from "./banner"
import {REFERENCE_SECTION_CSS} from "./section"
import {REFERENCE_TOC_CSS} from "./toc"

// TODO: FEATURE IMPROVE, READY TO GO: But I'm afraid it isn't going to be caressable until [i]all [/i]the corners of the Reference are rounded.
//  Otherwise I might cut my fingers on the sharp corners. :)
//  In other words figure out hte border-wrapper again, now with it not exceeding bottom of the page fix too.

// tslint:disable-next-line comment-format
// language=CSS
const REFERENCE_WRAPPER_CSS = `
    .sc-reference-wrapper {
        width: 100%;
        max-width: ${MAX_APP_WIDTH}px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .sc-reference {
        background-color: white;
        height: 0;
        overflow-y: hidden;
        box-sizing: border-box;
    }

    .sc-reference-wrapper.open .sc-reference {
        padding: 10px;
        flex-grow: 1;
        margin: 0 ${APP_MARGIN}px ${APP_MARGIN}px 0;
        overflow-y: auto;
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
