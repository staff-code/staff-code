import {RecordKey} from "@sagittal/general"
import {Codeword, Symbol} from "../types"

// Not used yet. To be dealt with in the second pass on StaffCode.

const NOT_SMuFL_DEFINE_CUSTOM_MAP: Record<RecordKey<Codeword>, Symbol> = {
    /*U+E40E*/"dfon": {unicode: ""},
    /*U+E40F*/"dfof": {unicode: ""},
} as Record<Codeword, Symbol>

export {
    NOT_SMuFL_DEFINE_CUSTOM_MAP,
}
