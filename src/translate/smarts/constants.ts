import {Octals} from "../codes"
import {SmartStave} from "./horizontal"
import {Smarts} from "./types"
import {Clef, Pitch, PitchOrPosition, Position} from "./vertical"

const INITIAL_SMARTS: Smarts = {
    commenting: false,

    /* horizontal */

    advanceWidth: 0 as Octals,
    manualAdvance: 0 as Octals,
    advanceToEnd: false,
    staveWidth: 0 as Octals,
    spacing: 2 as Octals,
    staveOn: false,
    stave: SmartStave.LINES_5,

    /* vertical */

    clef: Clef.TREBLE,
    pitch: Pitch.B4,
    position: 0 as Position,
    pitchOrPosition: PitchOrPosition.POSITION,
}

export {
    INITIAL_SMARTS,
}
