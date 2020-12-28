import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"

// Not used yet. To be dealt with in the second pass on StaffCode.

const NOT_SMuFL_DEFINE_CUSTOM_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+E40E*/"dfon": "",
    /*U+E40F*/"dfof": "",
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_DEFINE_CUSTOM_MAP,
}
