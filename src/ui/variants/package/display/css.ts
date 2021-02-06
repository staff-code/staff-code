import {formatEm, formatPx, Px} from "@sagittal/general"
import {MARGIN_SIZE} from "../../../display"

const OFFSET_FOR_CLEANER_DISPLAY = -0.25 as Px

// tslint:disable-next-line comment-format
// language=CSS
const DISPLAY_CSS = `
    .sc-display {
        display: inline-block;
        margin: ${formatEm(MARGIN_SIZE)} ${formatPx(OFFSET_FOR_CLEANER_DISPLAY)};
    }
`

export {
    DISPLAY_CSS,
}
