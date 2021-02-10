import {RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../bin"
import {SMuFL_MAP} from "../smufl"

const NOTE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "nt1": SMuFL_MAP["ntwh"],
    "nt2up": SMuFL_MAP["nthfup"],
    "nt2dn": SMuFL_MAP["nthfdn"],
    "nt4up": SMuFL_MAP["ntqrup"],
    "nt4dn": SMuFL_MAP["ntqrdn"],
    "ntdb": SMuFL_MAP["ntdbwh"],
    "ntup": SMuFL_MAP["ntqrup"],
    "ntdn": SMuFL_MAP["ntqrdn"],
} as Record<Code & Word, Unicode & Word>

export {
    NOTE_ALIASES_MAP,
}
