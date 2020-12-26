import {RecordKey} from "@sagittal/general"
import {Code, Symbol} from "../types"
import {ACCIDENTAL_ALIASES_MAP} from "./accidentals"
import {LINE_BREAK_ALIASES_MAP, MANUAL_STAVE_ALIASES_MAP} from "./advanceAndStave"
import {BEAMS_ALIASES_MAP, NOTE_ALIASES_MAP, REST_ALIASES_MAP, TIME_SIGNATURE_ALIASES_MAP} from "./basics"
import {CLEF_ALIASES_MAP, GENERIC_POSITION_ALIASES_MAP} from "./positionAndClef"

const ALIAS_SYMBOL_MAP: Record<RecordKey<Code>, Symbol> = {
    ...NOTE_ALIASES_MAP,
    ...BEAMS_ALIASES_MAP,
    ...REST_ALIASES_MAP,
    ...TIME_SIGNATURE_ALIASES_MAP,
    ...CLEF_ALIASES_MAP,
    ...ACCIDENTAL_ALIASES_MAP,
    ...LINE_BREAK_ALIASES_MAP,
    ...MANUAL_STAVE_ALIASES_MAP,
    ...GENERIC_POSITION_ALIASES_MAP,
}

export {
    ALIAS_SYMBOL_MAP,
}
