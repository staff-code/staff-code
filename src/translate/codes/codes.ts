import {RecordKey, Word} from "@sagittal/general"
import {ALIASES_MAP} from "./aliases"
import {mergeAllCodeMapsIntoLowercasedCodeMap} from "./merge"
import {
    NOT_SMuFL_DEFINE_CUSTOM_COMMAND_MAP,
    NOT_SMuFL_LINE_BREAKS_MAP,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    NOT_SMuFL_SMART_ADVANCE_COMMAND_MAP,
    NOT_SMuFL_SMART_SPACING_COMMAND_MAP,
    NOT_SMuFL_SMART_STAVE_COMMAND_MAP,
    NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
} from "./notSmufl"
import {SMuFL_MAP} from "./smufl"
import {Code, LowercasedCode, Unicode} from "./types"

// See: http://forum.sagittal.org/viewtopic.php?f=17&t=436&p=3172#word-types

// Base glyphs means not aliased glyphs.
const BASE_GLYPH_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ...SMuFL_MAP,
    ...NOT_SMuFL_LINE_BREAKS_MAP,
    ...NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    ...NOT_SMuFL_ZERO_POSITION_MAP,
    ...NOT_SMuFL_MANUAL_ADVANCE_MAP,
}

// Commands do not emit unicode code points, but are still assigned codes to prevent new codes from being defined that
// Would conflict with them. No aliases exist for commands at this time, so no need to split into base and alias.
const COMMAND_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ...NOT_SMuFL_SMART_SPACING_COMMAND_MAP,
    ...NOT_SMuFL_SMART_STAVE_COMMAND_MAP,
    ...NOT_SMuFL_SMART_ADVANCE_COMMAND_MAP,
    ...NOT_SMuFL_DEFINE_CUSTOM_COMMAND_MAP,
}

const LOWERCASED_CODE_MAP: Record<RecordKey<LowercasedCode & Word>, Unicode & Word> =
    mergeAllCodeMapsIntoLowercasedCodeMap(
        BASE_GLYPH_MAP,
        ALIASES_MAP,
        COMMAND_MAP,
    )

export {
    LOWERCASED_CODE_MAP,
    BASE_GLYPH_MAP,
    COMMAND_MAP,
}
