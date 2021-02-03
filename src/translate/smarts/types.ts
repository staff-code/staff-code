import {Octals} from "../codes"
import {AltAdvance, SmartStave} from "./horizontal"
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
    altAdvance: AltAdvance,

    /* vertical */

    clef: Clef,
    pitch: Pitch,
    position: Position,
    pitchOrPosition: PitchOrPosition,
}

export {
    Smarts,
}
