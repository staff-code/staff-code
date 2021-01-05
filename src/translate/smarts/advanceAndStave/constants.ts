import {Word} from "@sagittal/general"
import {
    Code,
    computeUnicodeForCode,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    NOT_SMuFL_SMART_ADVANCE_NONSYMBOL_MAP,
    NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP,
    Octals,
    Unicode,
} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"

const BREAK_UNICODE = computeUnicodeForCode("br;" as Code & Word)

const ADVANCE_TO_END_UNICODE = computeUnicodeForCode("en;" as Code & Word)

const SMART_ADVANCE_UNICODE = computeUnicodeForCode(";" as Code & Word)

const SMART_ADVANCE_UNICODES = Object.values(NOT_SMuFL_SMART_ADVANCE_NONSYMBOL_MAP)
const MANUAL_ADVANCE_UNICODES = Object.values(NOT_SMuFL_MANUAL_ADVANCE_MAP)
const WIDTH_TO_ADVANCE_UNICODE_ARRAY: Array<Unicode & Word> =
    [EMPTY_UNICODE as Unicode & Word, ...MANUAL_ADVANCE_UNICODES]

const SMART_STAVE_ON_UNICODE = computeUnicodeForCode("ston" as Code & Word)
const SMART_STAVE_OFF_UNICODE = computeUnicodeForCode("stof" as Code & Word)

const SPACING_UNICODES = Object.values(NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP)

const MAX_ADVANCE_UNICODE = computeUnicodeForCode("24;" as Code & Word)
const MAX_ADVANCE_WIDTH: Octals = 24 as Octals

const NARROW_STAVE_WIDTH = 8 as Octals
const NARROW_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("8;" as Code & Word)

const MEDIUM_STAVE_WIDTH = 16 as Octals
const MEDIUM_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("16;" as Code & Word)

const WIDE_STAVE_WIDTH = 24 as Octals
const WIDE_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("24;" as Code & Word)

export {
    BREAK_UNICODE,
    ADVANCE_TO_END_UNICODE,
    SMART_ADVANCE_UNICODE,
    WIDTH_TO_ADVANCE_UNICODE_ARRAY,
    SMART_ADVANCE_UNICODES,
    MANUAL_ADVANCE_UNICODES,
    SMART_STAVE_ON_UNICODE,
    SMART_STAVE_OFF_UNICODE,
    SPACING_UNICODES,
    MAX_ADVANCE_UNICODE,
    MAX_ADVANCE_WIDTH,
    NARROW_STAVE_WIDTH,
    NARROW_STAVE_WIDTH_ADVANCE,
    MEDIUM_STAVE_WIDTH,
    MEDIUM_STAVE_WIDTH_ADVANCE,
    WIDE_STAVE_WIDTH,
    WIDE_STAVE_WIDTH_ADVANCE,
}
