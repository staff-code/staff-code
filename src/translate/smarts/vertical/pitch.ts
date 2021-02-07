import {RecordKey, Word} from "@sagittal/general"
import {caseDesensitize} from "../../case"
import {CaseDesensitized, Code} from "../../codes"
import {smarts} from "../globals"
import {Clef, Pitch, Position} from "./types"

const CLEF_CODE_PITCHES = {
    [Clef.TREBLE]: {
        "C7": Pitch.C7,
        "B6": Pitch.B6,
        "A6": Pitch.A6,
        "G6": Pitch.G6,
        "F6": Pitch.F6,
        "E6": Pitch.E6,
        "D6": Pitch.D6,
        "C6": Pitch.C6,
        "B5": Pitch.B5,
        "A5": Pitch.A5,
        "G5": Pitch.G5,
        "F5": Pitch.F5,
        "E5": Pitch.E5,
        "D5": Pitch.D5,
        "C5": Pitch.C5,
        "B4": Pitch.B4,
        "A4": Pitch.A4,
        "G4": Pitch.G4,
        "F4": Pitch.F4,
        "E4": Pitch.E4,
        "D4": Pitch.D4,
        "C4": Pitch.C4,
        "B3": Pitch.B3,
        "A3": Pitch.A3,
        "G3": Pitch.G3,
        "F3": Pitch.F3,
        "E3": Pitch.E3,
        "D3": Pitch.D3,
        "C3": Pitch.C3,
        "B2": Pitch.B2,
        "A2": Pitch.A2,
    },
    [Clef.BASS]: {
        "E5": Pitch.E5,
        "D5": Pitch.D5,
        "C5": Pitch.C5,
        "B4": Pitch.B4,
        "A4": Pitch.A4,
        "G4": Pitch.G4,
        "F4": Pitch.F4,
        "E4": Pitch.E4,
        "D4": Pitch.D4,
        "C4": Pitch.C4,
        "B3": Pitch.B3,
        "A3": Pitch.A3,
        "G3": Pitch.G3,
        "F3": Pitch.F3,
        "E3": Pitch.E3,
        "D3": Pitch.D3,
        "C3": Pitch.C3,
        "B2": Pitch.B2,
        "A2": Pitch.A2,
        "G2": Pitch.G2,
        "F2": Pitch.F2,
        "E2": Pitch.E2,
        "D2": Pitch.D2,
        "C2": Pitch.C2,
        "B1": Pitch.B1,
        "A1": Pitch.A1,
        "G1": Pitch.G1,
        "F1": Pitch.F1,
        "E1": Pitch.E1,
        "D1": Pitch.D1,
        "C1": Pitch.C1,
    },
} as Record<Clef, Record<RecordKey<Code & Word>, Pitch>>
const CLEF_CODE_PITCH_ENTRIES = Object.entries(CLEF_CODE_PITCHES) as Array<[unknown, Record<Code & Word, Pitch>]> as
    Array<[Clef, Record<Code & Word, Pitch>]>
const CLEF_CASE_DESENSITIZED_CODE_PITCHES: Record<Clef, Record<RecordKey<Code & CaseDesensitized & Word>, Pitch>> =
    CLEF_CODE_PITCH_ENTRIES.reduce(
        (
            clefCaseDesensitizedCodePitches: Record<Clef, Record<RecordKey<Code & CaseDesensitized & Word>, Pitch>>,
            [clef, codePitches]: [Clef, Record<RecordKey<Code & Word>, Pitch>],
        ): Record<Clef, Record<RecordKey<Code & CaseDesensitized & Word>, Pitch>> => {
            return {
                ...clefCaseDesensitizedCodePitches,
                [clef]: (Object.entries(codePitches) as Array<[Code & Word, Pitch]>).reduce(
                    (
                        caseDesensitizedCodePitches: Record<RecordKey<Code & CaseDesensitized & Word>, Pitch>,
                        [code, pitch]: [Code & Word, Pitch],
                    ): Record<RecordKey<Code & CaseDesensitized & Word>, Pitch> => {
                        return {
                            ...caseDesensitizedCodePitches,
                            [caseDesensitize(code)]: pitch,
                        }
                    },
                    {} as Record<RecordKey<Code & CaseDesensitized & Word>, Pitch>,
                ),
            }
        },
        {} as Record<Clef, Record<RecordKey<Code & CaseDesensitized & Word>, Pitch>>,
    )

const computePitchFromCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): Pitch =>
    CLEF_CASE_DESENSITIZED_CODE_PITCHES[smarts.clef][caseDesensitizedCode]

const computePositionFromPitchCommandCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): Position =>
    computePitchPosition(computePitchFromCode(caseDesensitizedCode))

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

const computePitchPosition = (pitch: Pitch): Position =>
    CLEF_PITCH_POSITIONS[smarts.clef][pitch]

export {
    computePositionFromPitchCommandCode,
}
