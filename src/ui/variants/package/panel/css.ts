import {formatPx} from "@sagittal/general"
import {APP_MARGIN} from "../constants"
import {COPY_LINK_CSS} from "./copyLink"
import {DOWNLOAD_CSS} from "./download"
import {INPUT_CSS} from "./input"
import {SPINNER_CSS} from "./spinners"

// tslint:disable-next-line comment-format
// language=CSS
const PANEL_CSS = `
    ${COPY_LINK_CSS}
    ${DOWNLOAD_CSS}
    ${INPUT_CSS}
    ${SPINNER_CSS}
    
    .sc-panel {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        margin-right: ${formatPx(APP_MARGIN)};
    }

    .sc-controls {
        display: flex;
        justify-content: flex-end;
    }
`

export {
    PANEL_CSS,
}
