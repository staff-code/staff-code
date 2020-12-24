import {Width} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {TREBLE_CODE_MAP} from "./positionAndClef"
import {Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    advanceWidth: 0 as Width,
    staveWidth: 0 as Width,
    spacing: 2 as Width,
    staveOn: false,
    commenting: false,
    position: EMPTY_UNICODE,
    codeMap: TREBLE_CODE_MAP,
}

export {
    INITIAL_SMARTS,
}
