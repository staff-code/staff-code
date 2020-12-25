import {Octels} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {TREBLE_CODE_MAP} from "./positionAndClef"
import {Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    advanceWidth: 0 as Octels,
    staveWidth: 0 as Octels,
    spacing: 2 as Octels,
    staveOn: false,
    commenting: false,
    position: EMPTY_UNICODE,
    codeMap: TREBLE_CODE_MAP,
}

export {
    INITIAL_SMARTS,
}
