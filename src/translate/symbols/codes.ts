import {ACCIDENTAL_MAP} from "./accidentals"
import {MANUAL_ADVANCE_MAP, MANUAL_STAVE_MAP, SMART_ADVANCE_MAP, SMART_STAVE_MAP} from "./advanceAndStave"
import {
    BAR_LINE_MAP,
    BEAMS_MAP,
    BREAKS_MAP,
    DOT_MAP,
    LEGER_LINE_MAP,
    NOTE_MAP,
    REST_MAP,
    TIME_SIGNATURE_MAP,
} from "./basics"
import {
    BASS_POSITION_MAP,
    CLEF_MAP,
    GENERIC_POSITION_MAP,
    MANUAL_POSITION_MAP,
    TREBLE_POSITION_MAP,
} from "./positionAndClef"
import {Code, Symbol} from "./types"

// TODO: there's definitely some concept we haven't totally calcified here about the difference between input words
//  And codewords
const CODE_MAP: Record<Code, Symbol> = {
    ...MANUAL_ADVANCE_MAP,
    ...MANUAL_STAVE_MAP,

    ...CLEF_MAP,
    ...GENERIC_POSITION_MAP,

    ...LEGER_LINE_MAP,
    ...BAR_LINE_MAP,
    ...NOTE_MAP,
    ...REST_MAP,
    ...DOT_MAP,
    ...BEAMS_MAP,
    ...TIME_SIGNATURE_MAP,
    ...BREAKS_MAP,

    ...ACCIDENTAL_MAP,
}

const CODE_MAP_PLUS_SMART_CODES: Record<Code, Symbol> = {
    ...CODE_MAP,
    ...SMART_ADVANCE_MAP,
    ...SMART_STAVE_MAP,

    ...TREBLE_POSITION_MAP,
    ...BASS_POSITION_MAP,
    ...MANUAL_POSITION_MAP,
    // TODO: what happened to adding alto? is that just in Asana or something?
    //  Here it is: two other encodings of the sagittals: sagispeak, comma name
    //  And add staff=alto and staff=tenor
}

export {
    CODE_MAP,
    CODE_MAP_PLUS_SMART_CODES,
}
