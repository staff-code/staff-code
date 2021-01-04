import {RecordKey, Word} from "@sagittal/general"
import {NOT_SMuFL_CODES} from "../notSmufl"
import {Code, Unicode} from "../types"

const NOT_SMuFL_DEFINE_CUSTOM_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "[": NOT_SMuFL_CODES["dfon"],
    "]": NOT_SMuFL_CODES["dfof"],
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_DEFINE_CUSTOM_ALIASES_MAP,
}
