import {abs, BLANK, negative, RecordKey, Word} from "@sagittal/general"
import {CaseDesensitized, CASE_DESENSITIZED_CODE_MAP, Code, computeUnicodeForCode, Unicode} from "../../codes"
import {smarts} from "../globals"
import {isPositionUnicode} from "./isUnicode"
import {Position} from "./types"

const UNICODE_POSITIONS: Record<RecordKey<Unicode & Word>, Position> = {
    [computeUnicodeForCode("stpsrs15" as Code & Word)]: 15,
    [computeUnicodeForCode("stpsrs14" as Code & Word)]: 14,
    [computeUnicodeForCode("stpsrs13" as Code & Word)]: 13,
    [computeUnicodeForCode("stpsrs12" as Code & Word)]: 12,
    [computeUnicodeForCode("stpsrs11" as Code & Word)]: 11,
    [computeUnicodeForCode("stpsrs10" as Code & Word)]: 10,
    [computeUnicodeForCode("stpsrs9" as Code & Word)]: 9,
    [computeUnicodeForCode("stpsrs8" as Code & Word)]: 8,
    [computeUnicodeForCode("stpsrs7" as Code & Word)]: 7,
    [computeUnicodeForCode("stpsrs6" as Code & Word)]: 6,
    [computeUnicodeForCode("stpsrs5" as Code & Word)]: 5,
    [computeUnicodeForCode("stpsrs4" as Code & Word)]: 4,
    [computeUnicodeForCode("stpsrs3" as Code & Word)]: 3,
    [computeUnicodeForCode("stpsrs2" as Code & Word)]: 2,
    [computeUnicodeForCode("stpsrs1" as Code & Word)]: 1,
    [computeUnicodeForCode("stpsrs0" as Code & Word)]: 0,
    [computeUnicodeForCode("stpslr1" as Code & Word)]: -1,
    [computeUnicodeForCode("stpslr2" as Code & Word)]: -2,
    [computeUnicodeForCode("stpslr3" as Code & Word)]: -3,
    [computeUnicodeForCode("stpslr4" as Code & Word)]: -4,
    [computeUnicodeForCode("stpslr5" as Code & Word)]: -5,
    [computeUnicodeForCode("stpslr6" as Code & Word)]: -6,
    [computeUnicodeForCode("stpslr7" as Code & Word)]: -7,
    [computeUnicodeForCode("stpslr8" as Code & Word)]: -8,
    [computeUnicodeForCode("stpslr9" as Code & Word)]: -9,
    [computeUnicodeForCode("stpslr10" as Code & Word)]: -10,
    [computeUnicodeForCode("stpslr11" as Code & Word)]: -11,
    [computeUnicodeForCode("stpslr12" as Code & Word)]: -12,
    [computeUnicodeForCode("stpslr13" as Code & Word)]: -13,
    [computeUnicodeForCode("stpslr14" as Code & Word)]: -14,
    [computeUnicodeForCode("stpslr15" as Code & Word)]: -15,
} as Record<Unicode & Word, Position>

const computePositionFromCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): Position =>
    caseDesensitizedCode.match("up") ?
        parseInt(caseDesensitizedCode.replace("up", BLANK)) as Position :
        negative(parseInt(caseDesensitizedCode.replace("dn", BLANK))) as Position

const computeUnicodePosition = (unicode: Unicode & Word): Position =>
    UNICODE_POSITIONS[unicode]

const updateSmartPosition = (unicode: Unicode & Word): void => {
    if (isPositionUnicode(unicode)) {
        smarts.position = computeUnicodePosition(unicode)
    }
}

const computeSmartPositionUnicode = (): Unicode & Word => {
    const direction = smarts.position < 0 ? "lr" : "rs"
    const combiningStaffPositionCode = `stps${direction}${abs(smarts.position)}`

    return CASE_DESENSITIZED_CODE_MAP[combiningStaffPositionCode]
}

export {
    computePositionFromCode,
    updateSmartPosition,
    computeSmartPositionUnicode,
}
