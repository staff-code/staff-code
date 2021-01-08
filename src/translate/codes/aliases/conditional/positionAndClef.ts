import {RecordKey, Word} from "@sagittal/general"
import {NOT_SMuFL_MAP} from "../../notSmufl"
import {SMuFL_MAP} from "../../smufl"
import {Code, Unicode} from "../../types"

const TREBLE_CONDITIONAL_POSITION_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "C7": NOT_SMuFL_MAP["stpsrs15"],
    "B6": NOT_SMuFL_MAP["stpsrs14"],
    "A6": NOT_SMuFL_MAP["stpsrs13"],
    "G6": NOT_SMuFL_MAP["stpsrs12"],
    "F6": NOT_SMuFL_MAP["stpsrs11"],
    "E6": NOT_SMuFL_MAP["stpsrs10"],
    "D6": NOT_SMuFL_MAP["stpsrs9"],
    "C6": SMuFL_MAP["stpsrs8"],
    "B5": SMuFL_MAP["stpsrs7"],
    "A5": SMuFL_MAP["stpsrs6"],
    "G5": SMuFL_MAP["stpsrs5"],
    "F5": SMuFL_MAP["stpsrs4"],
    "E5": SMuFL_MAP["stpsrs3"],
    "D5": SMuFL_MAP["stpsrs2"],
    "C5": SMuFL_MAP["stpsrs1"],
    "B4": NOT_SMuFL_MAP["stpsrs0"],
    "A4": SMuFL_MAP["stpslr1"],
    "G4": SMuFL_MAP["stpslr2"],
    "F4": SMuFL_MAP["stpslr3"],
    "E4": SMuFL_MAP["stpslr4"],
    "D4": SMuFL_MAP["stpslr5"],
    "C4": SMuFL_MAP["stpslr6"],
    "B3": SMuFL_MAP["stpslr7"],
    "A3": SMuFL_MAP["stpslr8"],
    "G3": NOT_SMuFL_MAP["stpslr9"],
    "F3": NOT_SMuFL_MAP["stpslr10"],
    "E3": NOT_SMuFL_MAP["stpslr11"],
    "D3": NOT_SMuFL_MAP["stpslr12"],
    "C3": NOT_SMuFL_MAP["stpslr13"],
    "B2": NOT_SMuFL_MAP["stpslr14"],
    "A2": NOT_SMuFL_MAP["stpslr15"],
} as Record<Code & Word, Unicode & Word>

const BASS_CONDITIONAL_POSITION_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "E5": NOT_SMuFL_MAP["stpsrs15"],
    "D5": NOT_SMuFL_MAP["stpsrs14"],
    "C5": NOT_SMuFL_MAP["stpsrs13"],
    "B4": NOT_SMuFL_MAP["stpsrs12"],
    "A4": NOT_SMuFL_MAP["stpsrs11"],
    "G4": NOT_SMuFL_MAP["stpsrs10"],
    "F4": NOT_SMuFL_MAP["stpsrs9"],
    "E4": SMuFL_MAP["stpsrs8"],
    "D4": SMuFL_MAP["stpsrs7"],
    "C4": SMuFL_MAP["stpsrs6"],
    "B3": SMuFL_MAP["stpsrs5"],
    "A3": SMuFL_MAP["stpsrs4"],
    "G3": SMuFL_MAP["stpsrs3"],
    "F3": SMuFL_MAP["stpsrs2"],
    "E3": SMuFL_MAP["stpsrs1"],
    "D3": NOT_SMuFL_MAP["stpsrs0"],
    "C3": SMuFL_MAP["stpslr1"],
    "B2": SMuFL_MAP["stpslr2"],
    "A2": SMuFL_MAP["stpslr3"],
    "G2": SMuFL_MAP["stpslr4"],
    "F2": SMuFL_MAP["stpslr5"],
    "E2": SMuFL_MAP["stpslr6"],
    "D2": SMuFL_MAP["stpslr7"],
    "C2": SMuFL_MAP["stpslr8"],
    "B1": NOT_SMuFL_MAP["stpslr9"],
    "A1": NOT_SMuFL_MAP["stpslr10"],
    "G1": NOT_SMuFL_MAP["stpslr11"],
    "F1": NOT_SMuFL_MAP["stpslr12"],
    "E1": NOT_SMuFL_MAP["stpslr13"],
    "D1": NOT_SMuFL_MAP["stpslr14"],
    "C1": NOT_SMuFL_MAP["stpslr15"],
} as Record<Code & Word, Unicode & Word>

export {
    TREBLE_CONDITIONAL_POSITION_ALIASES_MAP,
    BASS_CONDITIONAL_POSITION_ALIASES_MAP,
}
