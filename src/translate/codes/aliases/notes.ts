import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../smufl"
import {Code, Unicode} from "../types"

const NOTE_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "nt1": SMuFL_MAP["noteWhole"],
    "nt2up": SMuFL_MAP["noteHalfUp"],
    "nt2dn": SMuFL_MAP["noteHalfDown"],
    "nt4up": SMuFL_MAP["noteQuarterUp"],
    "nt4dn": SMuFL_MAP["noteQuarterDown"],
    "ntdb": SMuFL_MAP["noteDoubleWhole"],
    "ntup": SMuFL_MAP["noteQuarterUp"],
    "ntdn": SMuFL_MAP["noteQuarterDown"],
} as Record<Code & Word, Unicode & Word>

export {
    NOTE_ALIASES_MAP,
}
