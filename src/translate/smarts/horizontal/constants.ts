import {Word} from "@sagittal/general"
import {Code, computeUnicodeForCode, NOT_SMuFL_MANUAL_ADVANCE_MAP, Octals, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"

const BREAK_UNICODE = computeUnicodeForCode("br;" as Code & Word)

const MANUAL_ADVANCE_UNICODES = Object.values(NOT_SMuFL_MANUAL_ADVANCE_MAP)
const WIDTH_TO_ADVANCE_UNICODE_ARRAY: Array<Unicode & Word> =
    [EMPTY_UNICODE as Unicode & Word, ...MANUAL_ADVANCE_UNICODES]

const MAX_ADVANCE_UNICODE = computeUnicodeForCode("80;" as Code & Word)
const MAX_ADVANCE_WIDTH: Octals = 80 as Octals

const NARROW_STAVE_WIDTH = 8 as Octals
const NARROW_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("8;" as Code & Word)

const MEDIUM_STAVE_WIDTH = 16 as Octals
const MEDIUM_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("16;" as Code & Word)

const WIDE_STAVE_WIDTH = 24 as Octals
const WIDE_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("24;" as Code & Word)

export {
    BREAK_UNICODE,
    WIDTH_TO_ADVANCE_UNICODE_ARRAY,
    MANUAL_ADVANCE_UNICODES,
    MAX_ADVANCE_UNICODE,
    MAX_ADVANCE_WIDTH,
    NARROW_STAVE_WIDTH,
    NARROW_STAVE_WIDTH_ADVANCE,
    MEDIUM_STAVE_WIDTH,
    MEDIUM_STAVE_WIDTH_ADVANCE,
    WIDE_STAVE_WIDTH,
    WIDE_STAVE_WIDTH_ADVANCE,
}
