import {Word} from "@sagittal/general"
import {Octels, Unicode} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {Clef} from "./positionAndClef"
import {Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    advanceWidth: 0 as Octels,
    staveWidth: 0 as Octels,
    spacing: 2 as Octels,
    staveOn: false,
    commenting: false,
    positionUnicode: EMPTY_UNICODE as Unicode & Word,
    clef: Clef.TREBLE,
}

export {
    INITIAL_SMARTS,
}
