import {Octals} from "../codes"
import {SmartStave} from "./advanceAndStave"
import {Clef, Pitch, PitchOrPosition, Position} from "./positionAndClef"
import {Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    commenting: false,

    /* advance and stave */

    advanceWidth: 0 as Octals,
    manualAdvance: 0 as Octals,
    advanceToEnd: false,
    staveWidth: 0 as Octals,
    spacing: 2 as Octals,
    staveOn: false,
    stave: SmartStave.LINES_5,

    /* position and clef */

    clef: Clef.TREBLE,
    pitch: Pitch.B4,
    position: 0 as Position,
    pitchOrPosition: PitchOrPosition.POSITION,
}

export {
    INITIAL_SMARTS,
}
