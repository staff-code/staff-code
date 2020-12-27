import {RecordKey, Word} from "@sagittal/general"
import {ALIAS_SYMBOL_MAP} from "./aliases"
import {mergeMaps} from "./merge"
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
import {Code, Symbol} from "./types"

// See: http://forum.sagittal.org/viewtopic.php?f=17&t=436&p=3172#word-types

// Base symbols means not aliased symbols.
const BASE_SYMBOL_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    ...SMuFL_MAP,
    ...NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    ...NOT_SMuFL_ZERO_POSITION_MAP,
    ...NOT_SMuFL_MANUAL_ADVANCE_MAP,
}

// Nonsymbols are still assigned code points to allow users to re-map different codes to them, but do not emit them.
// No aliases exist for nonsymbols at this time, so there is no need to split into base and alias.
const NONSYMBOL_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    ...NOT_SMuFL_SMART_SPACING_MAP,
    ...NOT_SMuFL_SMART_STAVE_MAP,
    ...NOT_SMuFL_SMART_ADVANCE_MAP,
    ...NOT_SMuFL_DEFINE_CUSTOM_MAP,
}

const CODE_MAP = mergeMaps(
    BASE_SYMBOL_MAP,
    ALIAS_SYMBOL_MAP,
    NONSYMBOL_MAP,
)

export {
    CODE_MAP,
    BASE_SYMBOL_MAP,
}
