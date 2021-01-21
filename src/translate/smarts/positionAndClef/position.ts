import {abs, BLANK, negative, RecordKey, Word} from "@sagittal/general"
import {CaseDesensitized, CASE_DESENSITIZED_CODE_MAP, Code, computeUnicodeForCode, Unicode} from "../../codes"
import {smarts} from "../globals"
import {isPositionUnicode} from "./isUnicode"
import {Clef, Pitch, PitchOrPosition, Position} from "./types"

const CLEF_PITCH_POSITIONS: Record<Clef, Record<Pitch, Position>> = {
    [Clef.TREBLE]: {
        [Pitch.C7]: 15,
        [Pitch.B6]: 14,
        [Pitch.A6]: 13,
        [Pitch.G6]: 12,
        [Pitch.F6]: 11,
        [Pitch.E6]: 10,
        [Pitch.D6]: 9,
        [Pitch.C6]: 8,
        [Pitch.B5]: 7,
        [Pitch.A5]: 6,
        [Pitch.G5]: 5,
        [Pitch.F5]: 4,
        [Pitch.E5]: 3,
        [Pitch.D5]: 2,
        [Pitch.C5]: 1,
        [Pitch.B4]: 0,
        [Pitch.A4]: -1,
        [Pitch.G4]: -2,
        [Pitch.F4]: -3,
        [Pitch.E4]: -4,
        [Pitch.D4]: -5,
        [Pitch.C4]: -6,
        [Pitch.B3]: -7,
        [Pitch.A3]: -8,
        [Pitch.G3]: -9,
        [Pitch.F3]: -10,
        [Pitch.E3]: -11,
        [Pitch.D3]: -12,
        [Pitch.C3]: -13,
        [Pitch.B2]: -14,
        [Pitch.A2]: -15,
    } as Record<Pitch, Position>,
    [Clef.BASS]: {
        [Pitch.E5]: 15,
        [Pitch.D5]: 14,
        [Pitch.C5]: 13,
        [Pitch.B4]: 12,
        [Pitch.A4]: 11,
        [Pitch.G4]: 10,
        [Pitch.F4]: 9,
        [Pitch.E4]: 8,
        [Pitch.D4]: 7,
        [Pitch.C4]: 6,
        [Pitch.B3]: 5,
        [Pitch.A3]: 4,
        [Pitch.G3]: 3,
        [Pitch.F3]: 2,
        [Pitch.E3]: 1,
        [Pitch.D3]: 0,
        [Pitch.C3]: -1,
        [Pitch.B2]: -2,
        [Pitch.A2]: -3,
        [Pitch.G2]: -4,
        [Pitch.F2]: -5,
        [Pitch.E2]: -6,
        [Pitch.D2]: -7,
        [Pitch.C2]: -8,
        [Pitch.B1]: -9,
        [Pitch.A1]: -10,
        [Pitch.G1]: -11,
        [Pitch.F1]: -12,
        [Pitch.E1]: -13,
        [Pitch.D1]: -14,
        [Pitch.C1]: -15,
    } as Record<Pitch, Position>,
}

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

const computePitchPosition = (pitch: Pitch): Position =>
    CLEF_PITCH_POSITIONS[smarts.clef][pitch]

const computeSmartPosition = (): Position =>
    smarts.pitchOrPosition === PitchOrPosition.PITCH ?
        computePitchPosition(smarts.pitch) :
        smarts.position

const computeSmartPositionUnicode = (): Unicode & Word => {
    const position = computeSmartPosition()
    const direction = position < 0 ? "lr" : "rs"
    const combiningStaffPositionCode = `stps${direction}${abs(position)}`

    return CASE_DESENSITIZED_CODE_MAP[combiningStaffPositionCode]
}

const computePositionFromCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): Position =>
    caseDesensitizedCode.match("up") ?
        parseInt(caseDesensitizedCode.replace("up", BLANK)) as Position :
        negative(parseInt(caseDesensitizedCode.replace("dn", BLANK))) as Position

const computeUnicodePosition = (unicode: Unicode & Word): Position =>
    UNICODE_POSITIONS[unicode]

const updateSmartPosition = (unicode: Unicode & Word): void => {
    if (isPositionUnicode(unicode)) {
        smarts.position = computeUnicodePosition(unicode)
        smarts.pitchOrPosition = PitchOrPosition.POSITION
    }
}

export {
    computeSmartPosition,
    computeSmartPositionUnicode,
    computePositionFromCode,
    updateSmartPosition,
}
