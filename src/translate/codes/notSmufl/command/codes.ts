import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../../types"
import {
    NOT_SMuFL_SMART_ADVANCE_COMMAND_MAP,
    NOT_SMuFL_SMART_SPACING_COMMAND_MAP,
    NOT_SMuFL_SMART_STAVE_COMMAND_MAP,
} from "./advanceAndStave"
import {NOT_SMuFL_DEFINE_CUSTOM_COMMAND_MAP} from "./custom"
import {NOT_SMuFL_GROUP_COMMAND_MAP} from "./group"
import {NOT_SMuFL_PITCH_COMMAND_MAP, NOT_SMuFL_POSITION_COMMAND_MAP} from "./positionAndClef"

// Commands do not emit unicode code points, but are still assigned codes to prevent new codes from being defined that
// Would conflict with them. No aliases exist for commands at this time, so no need to split into base and alias.
const COMMAND_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ...NOT_SMuFL_SMART_STAVE_COMMAND_MAP,
    ...NOT_SMuFL_SMART_SPACING_COMMAND_MAP,
    ...NOT_SMuFL_SMART_ADVANCE_COMMAND_MAP,
    ...NOT_SMuFL_DEFINE_CUSTOM_COMMAND_MAP,
    ...NOT_SMuFL_GROUP_COMMAND_MAP,
    ...NOT_SMuFL_POSITION_COMMAND_MAP,
    ...NOT_SMuFL_PITCH_COMMAND_MAP,
}

export {
    COMMAND_MAP,
}
