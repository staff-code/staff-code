import {Count, RecordKey, Word} from "@sagittal/general"
import {
    ABOVE_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP,
    BASS_CONDITIONAL_POSITION_ALIASES_MAP,
    Code,
    computeUnicodeForCode,
    GENERIC_POSITION_ALIASES_MAP,
    LowercasedCode,
    LOWERCASED_CODE_MAP,
    MIDDLE_POSITION_AND_BELOW_CONDITIONAL_NOTE_ALIASES_MAP,
    TREBLE_CONDITIONAL_POSITION_ALIASES_MAP,
    Unicode,
} from "../../codes"
import {Clef, Position, StemZone} from "./types"

const TREBLE_UNICODE = computeUnicodeForCode("Gcl" as Code & Word)
const BASS_UNICODE = computeUnicodeForCode("Fcl" as Code & Word)

const CLEF_LOWERCASED_CODE_MAPS:
    Record<Clef, Record<StemZone, Record<RecordKey<LowercasedCode & Word>, Unicode & Word>>> = {
    [Clef.TREBLE]: {
        [StemZone.ABOVE_MIDDLE_POSITION]: {
            ...LOWERCASED_CODE_MAP,
            ...TREBLE_CONDITIONAL_POSITION_ALIASES_MAP,
            ...ABOVE_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP,
        },
        [StemZone.MIDDLE_POSITION_AND_BELOW]: {
            ...LOWERCASED_CODE_MAP,
            ...TREBLE_CONDITIONAL_POSITION_ALIASES_MAP,
            ...MIDDLE_POSITION_AND_BELOW_CONDITIONAL_NOTE_ALIASES_MAP,
        },
    },
    [Clef.BASS]: {
        [StemZone.ABOVE_MIDDLE_POSITION]: {
            ...LOWERCASED_CODE_MAP,
            ...BASS_CONDITIONAL_POSITION_ALIASES_MAP,
            ...ABOVE_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP,
        },
        [StemZone.MIDDLE_POSITION_AND_BELOW]: {
            ...LOWERCASED_CODE_MAP,
            ...BASS_CONDITIONAL_POSITION_ALIASES_MAP,
            ...MIDDLE_POSITION_AND_BELOW_CONDITIONAL_NOTE_ALIASES_MAP,
        },
    },
}

const POSITION_UNICODES = Object.values(GENERIC_POSITION_ALIASES_MAP)
const NOT_SMuFL_ZERO_POSITION_UNICODE = computeUnicodeForCode("up0" as Code & Word)

const MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE = 15 as Count<Position>

export {
    TREBLE_UNICODE,
    BASS_UNICODE,
    CLEF_LOWERCASED_CODE_MAPS,
    POSITION_UNICODES,
    NOT_SMuFL_ZERO_POSITION_UNICODE,
    MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE,
}
