import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Code, Unicode} from "../../types"

const CONVENTIONAL_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "h": SMuFL_MAP["accidentalNatural"],
    "n": SMuFL_MAP["accidentalNatural"],
    "#": SMuFL_MAP["accidentalSharp"],
    "b": SMuFL_MAP["accidentalFlat"],
    "x": SMuFL_MAP["accidentalLargeDoubleSharp"],
    "bb": SMuFL_MAP["accidentalDoubleFlat"],
    "sh": SMuFL_MAP["accidentalSharp"],
    "fl": SMuFL_MAP["accidentalFlat"],
    "dbsh": SMuFL_MAP["accidentalLargeDoubleSharp"],
    "dbfl": SMuFL_MAP["accidentalDoubleFlat"],
} as Record<Code & Word, Unicode & Word>

export {
    CONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
}
