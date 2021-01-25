import {Count, RecordKey, Word} from "@sagittal/general"
import {
    BELOW_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP,
    CaseDesensitized,
    CASE_DESENSITIZED_CODE_MAP,
    Code,
    computeUnicodeForCode,
    mergeAllCodeMapsIntoCaseDesensitizedCodeMap,
    MIDDLE_POSITION_AND_ABOVE_CONDITIONAL_NOTE_ALIASES_MAP,
    POSITION_ALIASES_MAP,
    Unicode,
} from "../../codes"
import {Position, StemZone} from "./types"

const TREBLE_UNICODE = computeUnicodeForCode("Gcl" as Code & Word)
const BASS_UNICODE = computeUnicodeForCode("Fcl" as Code & Word)

const CONDITIONAL_ALIAS_ENHANCED_CASE_DESENSITIZED_CODE_MAP:
    Record<StemZone, Record<RecordKey<Code & CaseDesensitized & Word>, Unicode & Word>> = {
    [StemZone.MIDDLE_POSITION_AND_ABOVE]: mergeAllCodeMapsIntoCaseDesensitizedCodeMap(
        CASE_DESENSITIZED_CODE_MAP,
        MIDDLE_POSITION_AND_ABOVE_CONDITIONAL_NOTE_ALIASES_MAP,
    ),
    [StemZone.BELOW_MIDDLE_POSITION]: mergeAllCodeMapsIntoCaseDesensitizedCodeMap(
        CASE_DESENSITIZED_CODE_MAP,
        BELOW_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP,
    ),
}

const POSITION_UNICODES = Object.values(POSITION_ALIASES_MAP)

const MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE = 15 as Count<Position>

export {
    TREBLE_UNICODE,
    BASS_UNICODE,
    CONDITIONAL_ALIAS_ENHANCED_CASE_DESENSITIZED_CODE_MAP,
    MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE,
    POSITION_UNICODES,
}
