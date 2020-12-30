import {Word} from "@sagittal/general"
import {Octels, Unicode} from "../codes"
import {Clef} from "./positionAndClef"

interface Smarts {
    advanceWidth: Octels,
    staveWidth: Octels,
    spacing: Octels,
    staveOn: boolean,
    commenting: boolean,
    positionUnicode: Unicode & Word,
    clef: Clef,
}

export {
    Smarts,
}
