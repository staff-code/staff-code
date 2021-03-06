import {Clause, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../bin"
import {computeUnicodeForCode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts} from "./endOfInk"

const LINES_1_STAVE_UNICODES = [
    computeUnicodeForCode("st1lnnr" as Code & Word),
    computeUnicodeForCode("st1ln" as Code & Word),
    computeUnicodeForCode("st1lnwd" as Code & Word),
]
const LINES_2_STAVE_UNICODES = [
    computeUnicodeForCode("st2lnnr" as Code & Word),
    computeUnicodeForCode("st2ln" as Code & Word),
    computeUnicodeForCode("st2lnwd" as Code & Word),
]
const LINES_3_STAVE_UNICODES = [
    computeUnicodeForCode("st3lnnr" as Code & Word),
    computeUnicodeForCode("st3ln" as Code & Word),
    computeUnicodeForCode("st3lnwd" as Code & Word),
]
const LINES_4_STAVE_UNICODES = [
    computeUnicodeForCode("st4lnnr" as Code & Word),
    computeUnicodeForCode("st4ln" as Code & Word),
    computeUnicodeForCode("st4lnwd" as Code & Word),
]
const LINES_5_STAVE_UNICODES = [
    computeUnicodeForCode("st5lnnr" as Code & Word),
    computeUnicodeForCode("st5ln" as Code & Word),
    computeUnicodeForCode("st5lnwd" as Code & Word),
]
const LINES_6_STAVE_UNICODES = [
    computeUnicodeForCode("st6lnnr" as Code & Word),
    computeUnicodeForCode("st6ln" as Code & Word),
    computeUnicodeForCode("st6lnwd" as Code & Word),
]
const LUTE_STAVE_UNICODES = [
    computeUnicodeForCode("ltst6lnnr" as Code & Word),
    computeUnicodeForCode("ltst6ln" as Code & Word),
    computeUnicodeForCode("ltst6lnwd" as Code & Word),
]
const PLAINCHANT_STAVE_UNICODES = [
    computeUnicodeForCode("chstnr" as Code & Word),
    computeUnicodeForCode("chst" as Code & Word),
    computeUnicodeForCode("chstwd" as Code & Word),
]

const computeSmartStaveOffUnicodeClauseAndUpdateSmarts = (): Unicode & Clause => {
    if (!smarts.staveOn) return EMPTY_UNICODE as Unicode & Clause

    const unicodeClause = computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts()
    smarts.staveOn = false

    return unicodeClause
}

export {
    LINES_1_STAVE_UNICODES,
    LINES_2_STAVE_UNICODES,
    LINES_3_STAVE_UNICODES,
    LINES_4_STAVE_UNICODES,
    LINES_5_STAVE_UNICODES,
    LINES_6_STAVE_UNICODES,
    LUTE_STAVE_UNICODES,
    PLAINCHANT_STAVE_UNICODES,
    computeSmartStaveOffUnicodeClauseAndUpdateSmarts,
}
