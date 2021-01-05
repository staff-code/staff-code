import {RecordKey, Word} from "@sagittal/general"
import {ALIAS_SYMBOL_MAP} from "./aliases"
import {mergeAllCodeMapsIntoLowercasedCodeMap} from "./merge"
import {
    NOT_SMuFL_DEFINE_CUSTOM_NONSYMBOL_MAP,
    NOT_SMuFL_LINE_BREAKS_MAP,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    NOT_SMuFL_SMART_ADVANCE_NONSYMBOL_MAP,
    NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP,
    NOT_SMuFL_SMART_STAVE_NONSYMBOL_MAP,
    NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
} from "./notSmufl"
import {SMuFL_MAP} from "./smufl"
import {Code, LowercasedCode, Unicode} from "./types"

// See: http://forum.sagittal.org/viewtopic.php?f=17&t=436&p=3172#word-types

// Base symbols means not aliased symbols.
const BASE_SYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ...SMuFL_MAP,
    ...NOT_SMuFL_LINE_BREAKS_MAP,
    ...NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    ...NOT_SMuFL_ZERO_POSITION_MAP,
    ...NOT_SMuFL_MANUAL_ADVANCE_MAP,
}

// Nonsymbols do not emit unicode code points, but are still assigned codes to prevent new codes from being defined that
// Would conflict with them. No aliases exist for nonsymbols at this time, so no need to split into base and alias.
const NONSYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ...NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP,
    ...NOT_SMuFL_SMART_STAVE_NONSYMBOL_MAP,
    ...NOT_SMuFL_SMART_ADVANCE_NONSYMBOL_MAP,
    ...NOT_SMuFL_DEFINE_CUSTOM_NONSYMBOL_MAP,
}

const LOWERCASED_CODE_MAP: Record<RecordKey<LowercasedCode & Word>, Unicode & Word> =
    mergeAllCodeMapsIntoLowercasedCodeMap(
        BASE_SYMBOL_MAP,
        ALIAS_SYMBOL_MAP,
        NONSYMBOL_MAP,
    )

export {
    LOWERCASED_CODE_MAP,
    BASE_SYMBOL_MAP,
    NONSYMBOL_MAP,
}
