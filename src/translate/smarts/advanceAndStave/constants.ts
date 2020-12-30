import {Word} from "@sagittal/general"
import {
    Code,
    computeUnicodeForCode,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    NOT_SMuFL_SMART_ADVANCE_MAP,
    NOT_SMuFL_SMART_SPACING_MAP,
    NOT_SMuFL_SMART_STAVE_MAP,
    Octals,
    Unicode,
} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"

const BREAK_UNICODE = computeUnicodeForCode("br;" as Code & Word)

const SMART_ADVANCE_UNICODES = Object.values(NOT_SMuFL_SMART_ADVANCE_MAP)
const MANUAL_ADVANCE_UNICODES = Object.values(NOT_SMuFL_MANUAL_ADVANCE_MAP)
const WIDTH_TO_ADVANCE_UNICODE_ARRAY: Array<Unicode & Word> =
    [EMPTY_UNICODE as Unicode & Word, ...MANUAL_ADVANCE_UNICODES]

const ST8_UNICODE = computeUnicodeForCode("st8" as Code & Word)
const ST16_UNICODE = computeUnicodeForCode("st16" as Code & Word)
const ST24_UNICODE = computeUnicodeForCode("st24" as Code & Word)

const SMART_STAVE_ON_UNICODE = computeUnicodeForCode("ston" as Code & Word)
const SMART_STAVE_OFF_UNICODE = computeUnicodeForCode("stof" as Code & Word)
const SMART_STAVE_UNICODES = Object.values(NOT_SMuFL_SMART_STAVE_MAP)

const SPACING_UNICODES = Object.values(NOT_SMuFL_SMART_SPACING_MAP)

const MAX_ADVANCE_UNICODE = computeUnicodeForCode("24;" as Code & Word)
const MAX_ADVANCE_WIDTH: Octals = 24 as Octals

const MIN_STAVE_WIDTH = 8 as Octals
const MIN_STAVE_UNICODE = ST8_UNICODE
const MIN_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("8;" as Code & Word)

const MED_STAVE_WIDTH = 16 as Octals
const MED_STAVE_UNICODE = ST16_UNICODE
const MED_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("16;" as Code & Word)

const MAX_STAVE_WIDTH = 24 as Octals
const MAX_STAVE_UNICODE = ST24_UNICODE
const MAX_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("24;" as Code & Word)

export {
    BREAK_UNICODE,
    WIDTH_TO_ADVANCE_UNICODE_ARRAY,
    SMART_ADVANCE_UNICODES,
    MANUAL_ADVANCE_UNICODES,
    ST8_UNICODE,
    ST16_UNICODE,
    ST24_UNICODE,
    SMART_STAVE_ON_UNICODE,
    SMART_STAVE_OFF_UNICODE,
    SMART_STAVE_UNICODES,
    SPACING_UNICODES,
    MAX_ADVANCE_UNICODE,
    MAX_ADVANCE_WIDTH,
    MIN_STAVE_WIDTH,
    MIN_STAVE_UNICODE,
    MIN_STAVE_WIDTH_ADVANCE,
    MED_STAVE_WIDTH,
    MED_STAVE_UNICODE,
    MED_STAVE_WIDTH_ADVANCE,
    MAX_STAVE_WIDTH,
    MAX_STAVE_UNICODE,
    MAX_STAVE_WIDTH_ADVANCE,
}
