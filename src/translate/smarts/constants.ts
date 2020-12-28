import {Word} from "@sagittal/general"
import {Octels, Unicode} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {Clef, Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    advanceWidth: 0 as Octels,
    staveWidth: 0 as Octels,
    spacing: 2 as Octels,
    staveOn: false,
    commenting: false,
    position: EMPTY_UNICODE as Unicode & Word,
    clef: Clef.TREBLE,
}

export {
    INITIAL_SMARTS,
}
