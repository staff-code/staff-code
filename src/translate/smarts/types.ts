import {Word} from "@sagittal/general"
import {Octals, Unicode} from "../codes"
import {SmartStave} from "./advanceAndStave"
import {Clef} from "./positionAndClef"

interface Smarts {
    advanceWidth: Octals,
    staveWidth: Octals,
    spacing: Octals,
    staveOn: boolean,
    stave: SmartStave,
    commenting: boolean,
    positionUnicode: Unicode & Word,
    clef: Clef,
}

export {
    Smarts,
}
