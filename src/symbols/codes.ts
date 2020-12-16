import {ACCIDENTAL_MAP} from "./accidentals"
import {MANUAL_ADVANCE_MAP, MANUAL_STAVE_MAP, SMART_ADVANCE_MAP, SMART_STAVE_MAP} from "./advanceAndStave"
import {BAR_MAP, BEAMS_MAP, BREAKS_MAP, DOT_MAP, LEGER_LINE_MAP, NOTE_MAP, REST_MAP, TIME_SIGNATURE_MAP} from "./basics"
import {CLEF_MAP, GENERIC_POSITION_MAP, MANUAL_POSITION_MAP} from "./positionAndClef"
import {Code, Symbol} from "./types"

const CODE_MAP: Record<Code, Symbol> = {
    ...MANUAL_ADVANCE_MAP,
    ...SMART_ADVANCE_MAP,
    ...MANUAL_STAVE_MAP,
    ...SMART_STAVE_MAP,

    ...CLEF_MAP,
    ...GENERIC_POSITION_MAP,
    ...MANUAL_POSITION_MAP,

    ...LEGER_LINE_MAP,
    ...BAR_MAP,
    ...NOTE_MAP,
    ...REST_MAP,
    ...DOT_MAP,
    ...BEAMS_MAP,
    ...TIME_SIGNATURE_MAP,
    ...BREAKS_MAP,

    ...ACCIDENTAL_MAP,
}

export {
    CODE_MAP,
}
