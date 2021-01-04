import {Word} from "@sagittal/general"
import {Octals, Unicode} from "../codes"
import {AutoStave} from "./advanceAndStave"
import {Clef} from "./positionAndClef"

interface Smarts {
    advanceWidth: Octals,
    staveWidth: Octals,
    spacing: Octals,
    staveOn: boolean,
    stave: AutoStave,
    commenting: boolean,
    positionUnicode: Unicode & Word,
    clef: Clef,
}

export {
    Smarts,
}
