import {RecordKey, Word} from "@sagittal/general"
import {NOT_SMuFL_CODES} from "../notSmufl"
import {Code, Unicode} from "../types"

const LINE_BREAK_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "br;": NOT_SMuFL_CODES["lnfd"],
} as Record<Code & Word, Unicode & Word>

export {
    LINE_BREAK_ALIASES_MAP,
}
