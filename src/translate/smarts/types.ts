import {Word} from "@sagittal/general"
import {Octels, Unicode} from "../codes"

enum Clef {
    TREBLE,
    BASS,
}

interface Smarts {
    advanceWidth: Octels,
    staveWidth: Octels,
    spacing: Octels,
    staveOn: boolean,
    commenting: boolean,
    position: Unicode & Word,
    clef: Clef,
}

export {
    Smarts,
    Clef,
}
