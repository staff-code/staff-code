import {Word} from "@sagittal/general"
import {Octals, Unicode} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {Clef} from "./positionAndClef"
import {Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    advanceWidth: 0 as Octals,
    staveWidth: 0 as Octals,
    spacing: 2 as Octals,
    staveOn: false,
    commenting: false,
    positionUnicode: EMPTY_UNICODE as Unicode & Word,
    clef: Clef.TREBLE,
}

export {
    INITIAL_SMARTS,
}
