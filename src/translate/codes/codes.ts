import {RecordKey, Word} from "@sagittal/general"
import {ALIAS_SYMBOL_MAP} from "./aliases"
import {mergeAllCodeMapsIntoLowercasedCodeMap} from "./merge"
import {
    NOT_SMuFL_DEFINE_CUSTOM_MAP,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    NOT_SMuFL_SMART_ADVANCE_MAP,
    NOT_SMuFL_SMART_SPACING_MAP,
    NOT_SMuFL_SMART_STAVE_MAP,
    NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
} from "./notSmufl"
import {SMuFL_MAP} from "./smufl"
import {Code, LowercasedCode, Unicode} from "./types"

// See: http://forum.sagittal.org/viewtopic.php?f=17&t=436&p=3172#word-types

// Base symbols means not aliased symbols.
const BASE_SYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ...SMuFL_MAP,
    ...NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    ...NOT_SMuFL_ZERO_POSITION_MAP,
    ...NOT_SMuFL_MANUAL_ADVANCE_MAP,
}

// Nonsymbols are still assigned code points to allow users to re-map different codes to them, but do not emit them.
// No aliases exist for nonsymbols at this time, so there is no need to split into base and alias.
const NONSYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ...NOT_SMuFL_SMART_SPACING_MAP,
    ...NOT_SMuFL_SMART_STAVE_MAP,
    ...NOT_SMuFL_SMART_ADVANCE_MAP,
    ...NOT_SMuFL_DEFINE_CUSTOM_MAP,
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
}
