import {RecordKey, Word} from "@sagittal/general"
import {EMPTY_UNICODE} from "../../../constants"
import {Code, Unicode} from "../../types"

// Not used yet. To be dealt with in the second pass on StaffCode.

const NOT_SMuFL_DEFINE_CUSTOM_COMMAND_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "[": EMPTY_UNICODE,
    "]": EMPTY_UNICODE,
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_DEFINE_CUSTOM_COMMAND_MAP,
}
