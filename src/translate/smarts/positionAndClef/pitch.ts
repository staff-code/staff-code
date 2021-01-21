import {RecordKey, Word} from "@sagittal/general"
import {caseDesensitize, computeCaseDesensitizedCodes} from "../../case"
import {CaseDesensitized, Code, NOT_SMuFL_PITCH_COMMAND_MAP} from "../../codes"
import {smarts} from "../globals"
import {Clef, Pitch} from "./types"

const CASE_DESENSITIZED_NOT_SMuFL_PITCH_COMMAND_CODES = computeCaseDesensitizedCodes(NOT_SMuFL_PITCH_COMMAND_MAP)

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

const isPitchCommandCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): boolean =>
    CASE_DESENSITIZED_NOT_SMuFL_PITCH_COMMAND_CODES.includes(caseDesensitizedCode)

export {
    isPitchCommandCode,
    computePitchFromCode,
}
