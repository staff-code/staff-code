import {abs, RecordKey, Word} from "@sagittal/general"
import {
    BASS_CONDITIONAL_POSITION_ALIASES_MAP,
    CASE_DESENSITIZED_CODE_MAP,
    TREBLE_CONDITIONAL_POSITION_ALIASES_MAP,
    Unicode,
} from "../../codes"
import {smarts} from "../globals"
import {isPositionUnicode} from "./isUnicode"
import {Clef, Pitch, Position} from "./types"

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

const CLEF_UNICODE_PITCHES: Record<Clef, Record<RecordKey<Unicode & Word>, Pitch>> = {
    [Clef.TREBLE]: {
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["C7"]]: Pitch.C7,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["B6"]]: Pitch.B6,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["A6"]]: Pitch.A6,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["G6"]]: Pitch.G6,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["F6"]]: Pitch.F6,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["E6"]]: Pitch.E6,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["D6"]]: Pitch.D6,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["C6"]]: Pitch.C6,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["B5"]]: Pitch.B5,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["A5"]]: Pitch.A5,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["G5"]]: Pitch.G5,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["F5"]]: Pitch.F5,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["E5"]]: Pitch.E5,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["D5"]]: Pitch.D5,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["C5"]]: Pitch.C5,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["B4"]]: Pitch.B4,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["A4"]]: Pitch.A4,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["G4"]]: Pitch.G4,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["F4"]]: Pitch.F4,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["E4"]]: Pitch.E4,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["D4"]]: Pitch.D4,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["C4"]]: Pitch.C4,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["B3"]]: Pitch.B3,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["A3"]]: Pitch.A3,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["G3"]]: Pitch.G3,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["F3"]]: Pitch.F3,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["E3"]]: Pitch.E3,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["D3"]]: Pitch.D3,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["C3"]]: Pitch.C3,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["B2"]]: Pitch.B2,
        [TREBLE_CONDITIONAL_POSITION_ALIASES_MAP["A2"]]: Pitch.A2,
    },
    [Clef.BASS]: {
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["E5"]]: Pitch.E5,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["D5"]]: Pitch.D5,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["C5"]]: Pitch.C5,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["B4"]]: Pitch.B4,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["A4"]]: Pitch.A4,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["G4"]]: Pitch.G4,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["F4"]]: Pitch.F4,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["E4"]]: Pitch.E4,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["D4"]]: Pitch.D4,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["C4"]]: Pitch.C4,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["B3"]]: Pitch.B3,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["A3"]]: Pitch.A3,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["G3"]]: Pitch.G3,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["F3"]]: Pitch.F3,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["E3"]]: Pitch.E3,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["D3"]]: Pitch.D3,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["C3"]]: Pitch.C3,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["B2"]]: Pitch.B2,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["A2"]]: Pitch.A2,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["G2"]]: Pitch.G2,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["F2"]]: Pitch.F2,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["E2"]]: Pitch.E2,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["D2"]]: Pitch.D2,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["C2"]]: Pitch.C2,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["B1"]]: Pitch.B1,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["A1"]]: Pitch.A1,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["G1"]]: Pitch.G1,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["F1"]]: Pitch.F1,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["E1"]]: Pitch.E1,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["D1"]]: Pitch.D1,
        [BASS_CONDITIONAL_POSITION_ALIASES_MAP["C1"]]: Pitch.C1,
    },
}

const computeSmartPosition = (): Position =>
    CLEF_PITCH_POSITIONS[smarts.clef][smarts.pitch]

const computeUnicodePitch = (unicode: Unicode & Word): Pitch =>
    CLEF_UNICODE_PITCHES[smarts.clef][unicode]

const computeSmartPositionUnicode = (): Unicode & Word => {
    const position = computeSmartPosition()
    const direction = position < 0 ? "lr" : "rs"
    const combiningStaffPositionCode = `stps${direction}${abs(position)}`

    return CASE_DESENSITIZED_CODE_MAP[combiningStaffPositionCode]
}

const updateSmartPosition = (unicode: Unicode & Word): void => {
    if (isPositionUnicode(unicode)) smarts.pitch = computeUnicodePitch(unicode)
}

export {
    updateSmartPosition,
    computeSmartPosition,
    computeSmartPositionUnicode,
}
