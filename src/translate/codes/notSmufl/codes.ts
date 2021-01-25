import {mergeCodeMapsCheckingForCaseDesensitizedConflictsButWithoutCaseDesensitizing} from "../merge"
import {COMMAND_MAP} from "./command"
import {NOT_SMuFL_LINE_BREAKS_MAP, NOT_SMuFL_MANUAL_ADVANCE_MAP} from "./horizontal"
import {NOT_SMUFL_LEGER_LINES_SUPPLEMENT_MAP} from "./leger"
import {NOT_SMuFL_POSITIONS_SUPPLEMENT_MAP, NOT_SMuFL_ZERO_POSITION_MAP} from "./vertical"

const NOT_SMuFL_MAP = mergeCodeMapsCheckingForCaseDesensitizedConflictsButWithoutCaseDesensitizing(
    NOT_SMuFL_LINE_BREAKS_MAP,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
    NOT_SMuFL_POSITIONS_SUPPLEMENT_MAP,
    NOT_SMUFL_LEGER_LINES_SUPPLEMENT_MAP,
    COMMAND_MAP,
)

export {
    NOT_SMuFL_MAP,
}
