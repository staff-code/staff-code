import {Word} from "@sagittal/general"
import {Code, computeUnicodeForCode, Octals, Unicode} from "../../codes"
import {smarts} from "../globals"
import {SMART_STAVE_OFF_UNICODE, SMART_STAVE_ON_UNICODE} from "./constants"
import {SmartStave} from "./types"

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

const updateSmartStave = (unicode: Unicode & Word): void => {
    if (unicode === SMART_STAVE_ON_UNICODE) smarts.staveOn = true
    if (unicode === SMART_STAVE_OFF_UNICODE) {
        smarts.staveWidth = 0 as Octals
        smarts.staveOn = false
    }

    if (smarts.staveOn) {
        if (LINES_1_STAVE_UNICODES.includes(unicode)) smarts.stave = SmartStave.LINES_1
        if (LINES_2_STAVE_UNICODES.includes(unicode)) smarts.stave = SmartStave.LINES_2
        if (LINES_3_STAVE_UNICODES.includes(unicode)) smarts.stave = SmartStave.LINES_3
        if (LINES_4_STAVE_UNICODES.includes(unicode)) smarts.stave = SmartStave.LINES_4
        if (LINES_5_STAVE_UNICODES.includes(unicode)) smarts.stave = SmartStave.LINES_5
        if (LINES_6_STAVE_UNICODES.includes(unicode)) smarts.stave = SmartStave.LINES_6
        if (LUTE_STAVE_UNICODES.includes(unicode)) smarts.stave = SmartStave.LUTE
        if (PLAINCHANT_STAVE_UNICODES.includes(unicode)) smarts.stave = SmartStave.PLAINCHANT
    }
}

export {
    updateSmartStave,
}
