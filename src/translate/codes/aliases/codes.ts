import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"
import {ACCIDENTAL_ALIASES_MAP} from "./accidentals"
import {LINE_BREAK_ALIASES_MAP} from "./advanceAndStave"
import {BARLINE_ALIASES_MAP, BEAMS_ALIASES_MAP, REST_ALIASES_MAP, TIME_SIGNATURE_ALIASES_MAP} from "./basics"
import {NOTE_ALIASES_MAP} from "./notes"
import {
    CLEF_ALIASES_MAP,
    GENERIC_POSITION_ALIASES_MAP,
} from "./positionAndClef"

// Does not include the conditional clef-dependant aliases (e.g. "c4") or the position-dependent aliases (e.g. "nt4")
const ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ...NOTE_ALIASES_MAP,
    ...BEAMS_ALIASES_MAP,
    ...REST_ALIASES_MAP,
    ...BARLINE_ALIASES_MAP,
    ...TIME_SIGNATURE_ALIASES_MAP,
    ...CLEF_ALIASES_MAP,
    ...ACCIDENTAL_ALIASES_MAP,
    ...LINE_BREAK_ALIASES_MAP,
    ...GENERIC_POSITION_ALIASES_MAP,
}

export {
    ALIASES_MAP,
}
