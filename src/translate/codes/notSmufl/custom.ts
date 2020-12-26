import {RecordKey} from "@sagittal/general"
import {Code, Symbol} from "../types"

// Not used yet. To be dealt with in the second pass on StaffCode.

const NOT_SMuFL_DEFINE_CUSTOM_MAP: Record<RecordKey<Code>, Symbol> = {
    /*U+E40E*/"dfon": {unicode: ""},
    /*U+E40F*/"dfof": {unicode: ""},
} as Record<Code, Symbol>

export {
    NOT_SMuFL_DEFINE_CUSTOM_MAP,
}
