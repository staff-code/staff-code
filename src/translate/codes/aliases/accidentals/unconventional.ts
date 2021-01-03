import {RecordKey, Word} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Code, Unicode} from "../../types"

// See: https://w3c.github.io/smufl/gitbook/tables/stein-zimmermann-accidentals-24-edo.html
// And: https://w3c.github.io/smufl/gitbook/tables/other-accidentals.html

const UNCONVENTIONAL_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    ">": SMuFL_MAP["accidentalQuarterToneSharpStein"],
    "<": SMuFL_MAP["accidentalNarrowReversedFlat"],
    ">#": SMuFL_MAP["accidentalThreeQuarterTonesSharpStein"],
    "<b": SMuFL_MAP["accidentalNarrowReversedFlatAndFlat"],
    "+": SMuFL_MAP["accidentalWilsonPlus"],
    "-": SMuFL_MAP["accidentalWilsonMinus"],
} as Record<Code & Word, Unicode & Word>

export {
    UNCONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
}
