import {RecordKey, Word} from "@sagittal/general"
import {CaseDesensitized, Code, NOT_SMuFL_PITCH_COMMAND_MAP} from "../../codes"
import {smarts} from "../globals"
import {Clef, Pitch} from "./types"

const NOT_SMuFL_PITCH_COMMAND_CODES = Object.keys(NOT_SMuFL_PITCH_COMMAND_MAP)

// TODO: CLEAN, READY TO GO: CASE DESENSITIZATION W/R/T PITCH CODES
//  It would be nice wif we could figure out a way to go back to all capitalized pitch codes
//  And generally audit the case-desensitization layer w/r/t things that circumvent it

const CLEF_UNICODE_PITCHES: Record<Clef, Record<RecordKey<Code & CaseDesensitized & Word>, Pitch>> = {
    [Clef.TREBLE]: {
        "c7": Pitch.C7,
        "b6": Pitch.B6,
        "a6": Pitch.A6,
        "g6": Pitch.G6,
        "f6": Pitch.F6,
        "e6": Pitch.E6,
        "d6": Pitch.D6,
        "c6": Pitch.C6,
        "b5": Pitch.B5,
        "a5": Pitch.A5,
        "g5": Pitch.G5,
        "f5": Pitch.F5,
        "e5": Pitch.E5,
        "d5": Pitch.D5,
        "c5": Pitch.C5,
        "b4": Pitch.B4,
        "a4": Pitch.A4,
        "g4": Pitch.G4,
        "f4": Pitch.F4,
        "e4": Pitch.E4,
        "d4": Pitch.D4,
        "c4": Pitch.C4,
        "b3": Pitch.B3,
        "a3": Pitch.A3,
        "g3": Pitch.G3,
        "f3": Pitch.F3,
        "e3": Pitch.E3,
        "d3": Pitch.D3,
        "c3": Pitch.C3,
        "b2": Pitch.B2,
        "a2": Pitch.A2,
    },
    [Clef.BASS]: {
        "e5": Pitch.E5,
        "d5": Pitch.D5,
        "c5": Pitch.C5,
        "b4": Pitch.B4,
        "a4": Pitch.A4,
        "g4": Pitch.G4,
        "f4": Pitch.F4,
        "e4": Pitch.E4,
        "d4": Pitch.D4,
        "c4": Pitch.C4,
        "b3": Pitch.B3,
        "a3": Pitch.A3,
        "g3": Pitch.G3,
        "f3": Pitch.F3,
        "e3": Pitch.E3,
        "d3": Pitch.D3,
        "c3": Pitch.C3,
        "b2": Pitch.B2,
        "a2": Pitch.A2,
        "g2": Pitch.G2,
        "f2": Pitch.F2,
        "e2": Pitch.E2,
        "d2": Pitch.D2,
        "c2": Pitch.C2,
        "b1": Pitch.B1,
        "a1": Pitch.A1,
        "g1": Pitch.G1,
        "f1": Pitch.F1,
        "e1": Pitch.E1,
        "d1": Pitch.D1,
        "c1": Pitch.C1,
    },
}

const computePitchFromCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): Pitch =>
    CLEF_UNICODE_PITCHES[smarts.clef][caseDesensitizedCode]

const isPitchCommandCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): boolean =>
    NOT_SMuFL_PITCH_COMMAND_CODES.includes(caseDesensitizedCode)

export {
    isPitchCommandCode,
    computePitchFromCode,
}
