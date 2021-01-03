import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../smufl"
import {Code, Unicode} from "../types"

const TIME_SIGNATURE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "tmnm": SMuFL_MAP["timeSigCombNumerator"],
    "tmdn": SMuFL_MAP["timeSigCombDenominator"],
} as Record<Code & Word, Unicode & Word>

// TODO: NEW FEATURE, READY TO GO: SMART STEMS
//  "nt" w/o up/dn should auto-orient (middle pos is up) (don't worry about chords)

const NOTE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "nt1": SMuFL_MAP["noteWhole"],
    "nt2": SMuFL_MAP["noteHalfUp"],
    "nt4": SMuFL_MAP["noteQuarterUp"],
    "nt8": SMuFL_MAP["note8thUp"],
    "nt16": SMuFL_MAP["note16thUp"],
    "nt32": SMuFL_MAP["note32ndUp"],
    "nt64": SMuFL_MAP["note64thUp"],
    "nt128": SMuFL_MAP["note128thUp"],
    "nt256": SMuFL_MAP["note256thUp"],
    "nt512": SMuFL_MAP["note512thUp"],
    "nt1024": SMuFL_MAP["note1024thUp"],
    "nt2up": SMuFL_MAP["noteHalfUp"],
    "nt2dn": SMuFL_MAP["noteHalfDown"],
    "nt4up": SMuFL_MAP["noteQuarterUp"],
    "nt4dn": SMuFL_MAP["noteQuarterDown"],
    "nt": SMuFL_MAP["noteQuarterUp"],
    "ntdb": SMuFL_MAP["noteDoubleWhole"],
    "ntdn": SMuFL_MAP["noteQuarterDown"],
} as Record<Code & Word, Unicode & Word>

const REST_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "rsdb": SMuFL_MAP["restDoubleWhole"],
    "rs1": SMuFL_MAP["restWhole"],
    "rs2": SMuFL_MAP["restHalf"],
    "rs4": SMuFL_MAP["restQuarter"],
    "rs": SMuFL_MAP["restQuarter"],
} as Record<Code & Word, Unicode & Word>

// See: https://w3c.github.io/smufl/gitbook/tables/beamed-groups-of-notes.html
const BEAMS_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "ntbmst": SMuFL_MAP["textBlackNoteShortStem"],
    "ntbm8": SMuFL_MAP["textBlackNoteLongStem"],
    "ntbm16": SMuFL_MAP["textBlackNoteFrac16thShortStem"],
    "bm8": SMuFL_MAP["textCont8thBeamShortStem"],
    "bm16": SMuFL_MAP["textCont16thBeamShortStem"],
    "txtp3": SMuFL_MAP["textTuplet3ShortStem"],
} as Record<Code & Word, Unicode & Word>

export {
    TIME_SIGNATURE_ALIASES_MAP,
    NOTE_ALIASES_MAP,
    BEAMS_ALIASES_MAP,
    REST_ALIASES_MAP,
}
