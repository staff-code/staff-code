import {RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../bin"
import {mergeCodeMapsCheckingForCaseDesensitizedConflictsButWithoutCaseDesensitizing} from "../merge"
import {ACCIDENTAL_ALIASES_MAP} from "./accidentals"
import {BARLINE_ALIASES_MAP, BEAMS_ALIASES_MAP, REST_ALIASES_MAP, TIME_SIGNATURE_ALIASES_MAP} from "./basics"
import {NOTE_ALIASES_MAP} from "./notes"
import {CLEF_ALIASES_MAP, POSITION_ALIASES_MAP} from "./vertical"

// Does not include the position-conditional note aliases (e.g. "nt4"); those will be mixed-in conditionally later
const ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> =
    mergeCodeMapsCheckingForCaseDesensitizedConflictsButWithoutCaseDesensitizing(
        NOTE_ALIASES_MAP,
        BEAMS_ALIASES_MAP,
        REST_ALIASES_MAP,
        BARLINE_ALIASES_MAP,
        TIME_SIGNATURE_ALIASES_MAP,
        CLEF_ALIASES_MAP,
        ACCIDENTAL_ALIASES_MAP,
        POSITION_ALIASES_MAP,
    )

export {
    ALIASES_MAP,
}
