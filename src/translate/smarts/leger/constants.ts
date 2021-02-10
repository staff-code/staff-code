import {Word} from "@sagittal/general"
import {Code} from "../../../../bin"
import {computeUnicodeForCode} from "../../codes"
import {Octals} from "../horizontal"

const NARROW_LEGER_LINE_UNICODE = computeUnicodeForCode("lglnnr" as Code & Word)
const MEDIUM_LEGER_LINE_UNICODE = computeUnicodeForCode("lgln" as Code & Word)
const WIDE_LEGER_LINE_UNICODE = computeUnicodeForCode("lglnwd" as Code & Word)

const NARROW_LEGER_LINE_WIDTH = 7 as Octals // Can't do wo circular dep: computeUnicodeWidth(NARROW_LEGER_LINE_UNICODE)
const MEDIUM_LEGER_LINE_WIDTH = 13 as Octals // Can't do wo circular dep: computeUnicodeWidth(MEDIUM_LEGER_LINE_UNICODE)

export {
    NARROW_LEGER_LINE_UNICODE,
    MEDIUM_LEGER_LINE_UNICODE,
    WIDE_LEGER_LINE_UNICODE,
    NARROW_LEGER_LINE_WIDTH,
    MEDIUM_LEGER_LINE_WIDTH,
}
