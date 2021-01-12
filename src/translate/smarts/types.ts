import {Word} from "@sagittal/general"
import {Octals, Unicode} from "../codes"
import {SmartStave} from "./advanceAndStave"
import {Clef} from "./positionAndClef"

interface Smarts {
    advanceWidth: Octals,
    manualAdvance: Octals,
    advanceToEnd: boolean,
    staveWidth: Octals,
    spacing: Octals,
    staveOn: boolean,
    stave: SmartStave,
    commenting: boolean,
    // TODO: FEATURE IMPROVE, READY TO GO: NOTE SHOULD BE STICKY, NOT POSITION (WHEN CHANGING CLEFS)
    //  It seems to me that it's the positioning code word that should be sticky. (not the position)
    positionUnicode: Unicode & Word,
    clef: Clef,
}

export {
    Smarts,
}
