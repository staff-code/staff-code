import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Code, Unicode} from "../../types"

const BELOW_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "nt2": SMuFL_MAP["noteHalfUp"],
    "nt4": SMuFL_MAP["noteQuarterUp"],
    "nt8": SMuFL_MAP["note8thUp"],
    "nt16": SMuFL_MAP["note16thUp"],
    "nt32": SMuFL_MAP["note32ndUp"],
    "nt64": SMuFL_MAP["note64thUp"],
    "nt128": SMuFL_MAP["note128thUp"],
    "nt256": SMuFL_MAP["note256thUp"],
    "nt512": SMuFL_MAP["note512thUp"],
    "nt1024": SMuFL_MAP["note1024thUp"],
    "nt": SMuFL_MAP["noteQuarterUp"],
} as Record<Code & Word, Unicode & Word>

const MIDDLE_POSITION_AND_ABOVE_CONDITIONAL_NOTE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "nt2": SMuFL_MAP["noteHalfDown"],
    "nt4": SMuFL_MAP["noteQuarterDown"],
    "nt8": SMuFL_MAP["note8thDown"],
    "nt16": SMuFL_MAP["note16thDown"],
    "nt32": SMuFL_MAP["note32ndDown"],
    "nt64": SMuFL_MAP["note64thDown"],
    "nt128": SMuFL_MAP["note128thDown"],
    "nt256": SMuFL_MAP["note256thDown"],
    "nt512": SMuFL_MAP["note512thDown"],
    "nt1024": SMuFL_MAP["note1024thDown"],
    "nt": SMuFL_MAP["noteQuarterDown"],
} as Record<Code & Word, Unicode & Word>

export {
    BELOW_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP,
    MIDDLE_POSITION_AND_ABOVE_CONDITIONAL_NOTE_ALIASES_MAP,
}
