import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../smufl"
import {Code, Unicode} from "../types"

const CLEF_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "8va": SMuFL_MAP["otal"],
    "8vb": SMuFL_MAP["otbsvb"],
} as Record<Code & Word, Unicode & Word>

export {
    CLEF_ALIASES_MAP,
}
