import {Octals, SmartStave} from "./horizontal"
import {Clef, Position} from "./vertical"

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
    position: Position,
}

export {
    Smarts,
}
