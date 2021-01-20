import {formatEm} from "@sagittal/general"
import {MARGIN_SIZE} from "../../../display"

// tslint:disable-next-line comment-format
// language=CSS
const DISPLAY_CSS = `
    .sc-display {
        display: inline-block;
        margin: ${formatEm(MARGIN_SIZE)} 0;
    }
`

export {
    DISPLAY_CSS,
}
