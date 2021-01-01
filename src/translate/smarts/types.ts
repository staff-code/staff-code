import {Word} from "@sagittal/general"
import {Octals, Unicode} from "../codes"
import {AutoStave} from "./advanceAndStave"
import {AutoLeger} from "./leger"
import {Clef} from "./positionAndClef"

interface Smarts {
    advanceWidth: Octals,
    staveWidth: Octals,
    spacing: Octals,
    staveOn: boolean,
    stave: AutoStave,
    leger: AutoLeger,
    commenting: boolean,
    positionUnicode: Unicode & Word,
    clef: Clef,
}

export {
    Smarts,
}
