import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"
import {ACCIDENTAL_ALIASES_MAP} from "./accidentals"
import {LINE_BREAK_ALIASES_MAP} from "./advanceAndStave"
import {BEAMS_ALIASES_MAP, REST_ALIASES_MAP, TIME_SIGNATURE_ALIASES_MAP} from "./basics"
import {NOT_SMuFL_DEFINE_CUSTOM_ALIASES_MAP} from "./custom"
import {NOTE_ALIASES_MAP} from "./notes"
import {
    CLEF_ALIASES_MAP,
    GENERIC_POSITION_ALIASES_MAP,
    NOT_SMuFL_SUPPLEMENTAL_POSITION_ALIASES_MAP,
    NOT_SMuFL_ZERO_POSITION_ALIASES_MAP,
} from "./positionAndClef"
import {SMuFL_ABBREVIATION_ALIASES_MAP} from "./smufl"

// Does not include the conditional clef-dependant aliases (e.g. "c4") or the position-dependent aliases (e.g. "nt4")
const ALIAS_SYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ...SMuFL_ABBREVIATION_ALIASES_MAP,
    ...NOT_SMuFL_ZERO_POSITION_ALIASES_MAP,
    ...NOT_SMuFL_SUPPLEMENTAL_POSITION_ALIASES_MAP,
    ...NOTE_ALIASES_MAP,
    ...BEAMS_ALIASES_MAP,
    ...REST_ALIASES_MAP,
    ...TIME_SIGNATURE_ALIASES_MAP,
    ...CLEF_ALIASES_MAP,
    ...ACCIDENTAL_ALIASES_MAP,
    ...LINE_BREAK_ALIASES_MAP,
    ...GENERIC_POSITION_ALIASES_MAP,
    ...NOT_SMuFL_DEFINE_CUSTOM_ALIASES_MAP,
}

export {
    ALIAS_SYMBOL_MAP,
}
