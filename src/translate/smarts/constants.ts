import {Word} from "@sagittal/general"
import {Octals, Unicode} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {AutoStave} from "./advanceAndStave"
import {AutoLeger} from "./leger/types"
import {Clef} from "./positionAndClef"
import {Smarts} from "./types"

const INITIAL_SMARTS: Smarts = {
    advanceWidth: 0 as Octals,
    staveWidth: 0 as Octals,
    spacing: 2 as Octals,
    staveOn: false,
    stave: AutoStave.LINES_5,
    leger: AutoLeger.MEDIUM,
    commenting: false,
    positionUnicode: EMPTY_UNICODE as Unicode & Word,
    clef: Clef.TREBLE,
}

export {
    INITIAL_SMARTS,
}
