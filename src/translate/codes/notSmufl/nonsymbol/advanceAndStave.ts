import {RecordKey, Word} from "@sagittal/general"
import {EMPTY_UNICODE} from "../../../constants"
import {Code, Unicode} from "../../types"

// TODO: CLEAN: NONSYMBOL CODE → COMMAND CODE

const NOT_SMuFL_SMART_STAVE_NONSYMBOL_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "ston": EMPTY_UNICODE,  // Smart staff on
    "stof": EMPTY_UNICODE,  // Smart staff off
    // TODO: MAYBE BUG: I just realised that the en; lookahead should stop if it reaches a "stof" or a "br;"
    //  Without finding any visible symbol. It shouldn't search all the way to the end of the input in that case.
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
    ";": EMPTY_UNICODE,     // Smart advance
    // TODO: FEATURE IMPROVE: AT END OF LINES, ADVANCE TO END OF STAFF, DON'T EXCEED STAVE LINES, ALT SOLUTION TO EN;
    ";;": EMPTY_UNICODE,    // Final smart advance, without spacing
    // TODO: FEATURE IMPROVE, READY TO GO: EN; SHOULD WORK WHEN STOF, LIKE A ;
    "en;": EMPTY_UNICODE,   // Advance-to-end
    "rt;": EMPTY_UNICODE,   // Right align
    "cn;": EMPTY_UNICODE,   // Center align
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP,
    NOT_SMuFL_SMART_STAVE_NONSYMBOL_MAP,
    NOT_SMuFL_SMART_ADVANCE_NONSYMBOL_MAP,
}
