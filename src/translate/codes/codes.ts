import {CaseDesensitized, RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../bin"
import {ALIASES_MAP} from "./aliases"
import {
    mergeAllCodeMapsIntoCaseDesensitizedCodeMap,
    mergeCodeMapsCheckingForCaseDesensitizedConflictsButWithoutCaseDesensitizing,
} from "./merge"
import {
    COMMAND_MAP,
    NOT_SMUFL_LEGER_LINES_SUPPLEMENT_MAP,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    NOT_SMuFL_POSITIONS_SUPPLEMENT_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
} from "./notSmufl"
import {SMuFL_MAP} from "./smufl"

// See: https://forum.sagittal.org/viewtopic.php?f=17&t=436&p=3172#word-types

// Base glyphs means not aliased glyphs.
const BASE_GLYPH_MAP: Record<RecordKey<Code & Word>, Unicode & Word> =
    mergeCodeMapsCheckingForCaseDesensitizedConflictsButWithoutCaseDesensitizing(
        SMuFL_MAP,
        NOT_SMuFL_POSITIONS_SUPPLEMENT_MAP,
        NOT_SMUFL_LEGER_LINES_SUPPLEMENT_MAP,
        NOT_SMuFL_ZERO_POSITION_MAP,
        NOT_SMuFL_MANUAL_ADVANCE_MAP,
    )

const CASE_DESENSITIZED_CODE_MAP: Record<RecordKey<Code & CaseDesensitized & Word>, Unicode & Word> =
    mergeAllCodeMapsIntoCaseDesensitizedCodeMap(
        BASE_GLYPH_MAP,
        ALIASES_MAP,
        COMMAND_MAP,
    )

export {
    CASE_DESENSITIZED_CODE_MAP,
    BASE_GLYPH_MAP,
}
