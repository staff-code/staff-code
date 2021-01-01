import {Count, Word} from "@sagittal/general"
import {Code, computeUnicodeForCode} from "../../codes"
import {Position} from "../positionAndClef"

const NARROW_LEGER_LINE_UNICODE = computeUnicodeForCode("lglnnr" as Code & Word)
const MEDIUM_LEGER_LINE_UNICODE = computeUnicodeForCode("lgln" as Code & Word)
const WIDE_LEGER_LINE_UNICODE = computeUnicodeForCode("lglnwd" as Code & Word)

const MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE = 15 as Count<Position>

export {
    NARROW_LEGER_LINE_UNICODE,
    MEDIUM_LEGER_LINE_UNICODE,
    WIDE_LEGER_LINE_UNICODE,
    MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE,
}
