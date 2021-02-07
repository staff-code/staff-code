import {Octals} from "../codes"
import {SmartStave} from "./horizontal"
import {Clef, Pitch, PitchOrPosition, Position} from "./vertical"

interface Smarts {
    commenting: boolean,

    /* horizontal */

    advanceWidth: Octals,
    manualAdvance: Octals,
    advanceToEnd: boolean,
    staveWidth: Octals,
    spacing: Octals,
    staveOn: boolean,
    stave: SmartStave,

    /* vertical */

    clef: Clef,
    pitch: Pitch,
    position: Position,
    pitchOrPosition: PitchOrPosition,
}

export {
    Smarts,
}
