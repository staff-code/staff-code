import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../smufl"
import {Code, Unicode} from "../types"

const TIME_SIGNATURE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "tmnm": SMuFL_MAP["timeSigCombNumerator"],
    "tmdn": SMuFL_MAP["timeSigCombDenominator"],
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

const BARLINE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "bl": SMuFL_MAP["barlineSingle"],
} as Record<Code & Word, Unicode & Word>

export {
    TIME_SIGNATURE_ALIASES_MAP,
    BEAMS_ALIASES_MAP,
    REST_ALIASES_MAP,
    BARLINE_ALIASES_MAP,
}
