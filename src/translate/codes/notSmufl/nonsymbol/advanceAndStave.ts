import {RecordKey, Word} from "@sagittal/general"
import {EMPTY_UNICODE} from "../../../constants"
import {Code, Unicode} from "../../types"

const NOT_SMuFL_SMART_STAVE_NONSYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "ston": EMPTY_UNICODE,
    "stof": EMPTY_UNICODE,
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "sp0": EMPTY_UNICODE,
    "sp1": EMPTY_UNICODE,
    "sp2": EMPTY_UNICODE,
    "sp3": EMPTY_UNICODE,
    "sp4": EMPTY_UNICODE,
    "sp5": EMPTY_UNICODE,
    "sp6": EMPTY_UNICODE,
    "sp7": EMPTY_UNICODE,
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SMART_ADVANCE_NONSYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ";": EMPTY_UNICODE,
    "en;": EMPTY_UNICODE,
    "rt;": EMPTY_UNICODE,
    "cn;": EMPTY_UNICODE,
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP,
    NOT_SMuFL_SMART_STAVE_NONSYMBOL_MAP,
    NOT_SMuFL_SMART_ADVANCE_NONSYMBOL_MAP,
}
