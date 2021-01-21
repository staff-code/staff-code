import {Octals} from "../codes"
import {SmartStave} from "./advanceAndStave"
import {Clef, Pitch, PitchOrPosition, Position} from "./positionAndClef"

interface Smarts {
    advanceWidth: Octals,
    manualAdvance: Octals,
    advanceToEnd: boolean,
    staveWidth: Octals,
    spacing: Octals,
    staveOn: boolean,
    stave: SmartStave,
    commenting: boolean,
    clef: Clef,
    pitch: Pitch,
    position: Position,
    pitchOrPosition: PitchOrPosition,
}

export {
    Smarts,
}
