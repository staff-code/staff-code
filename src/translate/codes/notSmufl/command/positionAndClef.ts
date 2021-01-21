import {RecordKey, Word} from "@sagittal/general"
import {EMPTY_UNICODE} from "../../../constants"
import {Code, Unicode} from "../../types"

const NOT_SMuFL_PITCH_COMMAND_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "C7": EMPTY_UNICODE,
    "B6": EMPTY_UNICODE,
    "A6": EMPTY_UNICODE,
    "G6": EMPTY_UNICODE,
    "F6": EMPTY_UNICODE,
    "E6": EMPTY_UNICODE,
    "D6": EMPTY_UNICODE,
    "C6": EMPTY_UNICODE,
    "B5": EMPTY_UNICODE,
    "A5": EMPTY_UNICODE,
    "G5": EMPTY_UNICODE,
    "F5": EMPTY_UNICODE,
    "E5": EMPTY_UNICODE,
    "D5": EMPTY_UNICODE,
    "C5": EMPTY_UNICODE,
    "B4": EMPTY_UNICODE,
    "A4": EMPTY_UNICODE,
    "G4": EMPTY_UNICODE,
    "F4": EMPTY_UNICODE,
    "E4": EMPTY_UNICODE,
    "D4": EMPTY_UNICODE,
    "C4": EMPTY_UNICODE,
    "B3": EMPTY_UNICODE,
    "A3": EMPTY_UNICODE,
    "G3": EMPTY_UNICODE,
    "F3": EMPTY_UNICODE,
    "E3": EMPTY_UNICODE,
    "D3": EMPTY_UNICODE,
    "C3": EMPTY_UNICODE,
    "B2": EMPTY_UNICODE,
    "A2": EMPTY_UNICODE,
    "G2": EMPTY_UNICODE,
    "F2": EMPTY_UNICODE,
    "E2": EMPTY_UNICODE,
    "D2": EMPTY_UNICODE,
    "C2": EMPTY_UNICODE,
    "B1": EMPTY_UNICODE,
    "A1": EMPTY_UNICODE,
    "G1": EMPTY_UNICODE,
    "F1": EMPTY_UNICODE,
    "E1": EMPTY_UNICODE,
    "D1": EMPTY_UNICODE,
    "C1": EMPTY_UNICODE,
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_PITCH_COMMAND_MAP,
}
