import {Octels} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {TREBLE_CODEWORD_MAP} from "./positionAndClef"
import {Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    advanceWidth: 0 as Octels,
    staveWidth: 0 as Octels,
    spacing: 2 as Octels,
    staveOn: false,
    commenting: false,
    position: EMPTY_UNICODE,
    codewordMap: TREBLE_CODEWORD_MAP,
}

export {
    INITIAL_SMARTS,
}
