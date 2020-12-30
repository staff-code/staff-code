import {Count, RecordKey, Word} from "@sagittal/general"
import {
    BASS_POSITION_ALIASES_MAP,
    Code,
    computeUnicodeForCode,
    GENERIC_POSITION_ALIASES_MAP,
    LowercasedCode,
    LOWERCASED_CODE_MAP,
    TREBLE_POSITION_ALIASES_MAP,
    Unicode,
} from "../../codes"
import {Clef, Position} from "./types"

const TREBLE_UNICODE = computeUnicodeForCode("Gcl" as Code & Word)
const BASS_UNICODE = computeUnicodeForCode("Fcl" as Code & Word)

const LEGER_LINE_UNICODE = computeUnicodeForCode("lgln" as Code & Word)

const CLEF_LOWERCASED_CODE_MAPS: Record<RecordKey<Clef>, Record<RecordKey<LowercasedCode & Word>, Unicode & Word>> = {
    [Clef.TREBLE]: {...LOWERCASED_CODE_MAP, ...TREBLE_POSITION_ALIASES_MAP},
    [Clef.BASS]: {...LOWERCASED_CODE_MAP, ...BASS_POSITION_ALIASES_MAP},
}

const POSITION_UNICODES = Object.values(GENERIC_POSITION_ALIASES_MAP)
const NOT_SMuFL_ZERO_POSITION_UNICODE = computeUnicodeForCode("up0" as Code & Word)

const MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE = 15 as Count<Position>

export {
    TREBLE_UNICODE,
    BASS_UNICODE,
    LEGER_LINE_UNICODE,
    CLEF_LOWERCASED_CODE_MAPS,
    POSITION_UNICODES,
    NOT_SMuFL_ZERO_POSITION_UNICODE,
    MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE,
}
