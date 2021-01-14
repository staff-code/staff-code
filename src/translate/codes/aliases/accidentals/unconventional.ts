import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Code, Unicode} from "../../types"

// See: https://w3c.github.io/smufl/gitbook/tables/stein-zimmermann-accidentals-24-edo.html
// And: https://w3c.github.io/smufl/gitbook/tables/other-accidentals.html

const UNCONVENTIONAL_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "t": SMuFL_MAP["acqrtnshst"],
    "d": SMuFL_MAP["acnrrvfl"],
    "t#": SMuFL_MAP["acthqrtnshst"],
    "db": SMuFL_MAP["acnrrvflanfl"],
    "+": SMuFL_MAP["acwlpl"],
    "-": SMuFL_MAP["acwlmn"],
} as Record<Code & Word, Unicode & Word>

export {
    UNCONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
}
