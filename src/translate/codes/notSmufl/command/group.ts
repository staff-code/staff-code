import {RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../../bin"
import {EMPTY_UNICODE} from "../../../constants"

// Not used yet. To be dealt with in the second pass on StaffCode.

const NOT_SMuFL_GROUP_COMMAND_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "(": EMPTY_UNICODE,
    ")": EMPTY_UNICODE,
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_GROUP_COMMAND_MAP,
}
