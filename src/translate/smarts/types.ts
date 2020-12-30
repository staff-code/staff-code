import {Word} from "@sagittal/general"
import {Octals, Unicode} from "../codes"
import {Clef} from "./positionAndClef"

interface Smarts {
    advanceWidth: Octals,
    staveWidth: Octals,
    spacing: Octals,
    staveOn: boolean,
    commenting: boolean,
    positionUnicode: Unicode & Word,
    clef: Clef,
}

export {
    Smarts,
}
