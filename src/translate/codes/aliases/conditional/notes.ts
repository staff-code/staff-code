import {RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../../bin"
import {SMuFL_MAP} from "../../smufl"

const BELOW_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "nt2": SMuFL_MAP["nthfup"],
    "nt4": SMuFL_MAP["ntqrup"],
    "nt8": SMuFL_MAP["nt8up"],
    "nt16": SMuFL_MAP["nt16up"],
    "nt32": SMuFL_MAP["nt32up"],
    "nt64": SMuFL_MAP["nt64up"],
    "nt128": SMuFL_MAP["nt128up"],
    "nt256": SMuFL_MAP["nt256up"],
    "nt512": SMuFL_MAP["nt512up"],
    "nt1024": SMuFL_MAP["nt1024up"],
    "nt": SMuFL_MAP["ntqrup"],
} as Record<Code & Word, Unicode & Word>

const MIDDLE_POSITION_AND_ABOVE_CONDITIONAL_NOTE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "nt2": SMuFL_MAP["nthfdn"],
    "nt4": SMuFL_MAP["ntqrdn"],
    "nt8": SMuFL_MAP["nt8dn"],
    "nt16": SMuFL_MAP["nt16dn"],
    "nt32": SMuFL_MAP["nt32dn"],
    "nt64": SMuFL_MAP["nt64dn"],
    "nt128": SMuFL_MAP["nt128dn"],
    "nt256": SMuFL_MAP["nt256dn"],
    "nt512": SMuFL_MAP["nt512dn"],
    "nt1024": SMuFL_MAP["nt1024dn"],
    "nt": SMuFL_MAP["ntqrdn"],
} as Record<Code & Word, Unicode & Word>

export {
    BELOW_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP,
    MIDDLE_POSITION_AND_ABOVE_CONDITIONAL_NOTE_ALIASES_MAP,
}
