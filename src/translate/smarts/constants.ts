import {Octals} from "../codes"
import {SmartStave} from "./advanceAndStave"
import {Clef, Pitch} from "./positionAndClef"
import {Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    advanceWidth: 0 as Octals,
    manualAdvance: 0 as Octals,
    advanceToEnd: false,
    staveWidth: 0 as Octals,
    spacing: 2 as Octals,
    staveOn: false,
    stave: SmartStave.LINES_5,
    commenting: false,
    clef: Clef.TREBLE,
    pitch: Pitch.B4,
}

export {
    INITIAL_SMARTS,
}
