import {Clause, subtract, sumTexts} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {MAX_ADVANCE_UNICODE, MAX_ADVANCE_WIDTH, WIDTH_TO_ADVANCE_UNICODE_ARRAY} from "./constants"

const computeAdvanceUnicode = (width: Octals): Unicode & Clause => {
    let remainingWidth = width

    let unicodeClause = EMPTY_UNICODE as Unicode & Clause
    while (remainingWidth >= MAX_ADVANCE_WIDTH) {
        remainingWidth = subtract(remainingWidth, MAX_ADVANCE_WIDTH)
        unicodeClause = sumTexts(unicodeClause, MAX_ADVANCE_UNICODE as Unicode) as Unicode & Clause
    }

    return sumTexts(unicodeClause, WIDTH_TO_ADVANCE_UNICODE_ARRAY[remainingWidth] as Unicode) as Unicode & Clause
}

export {
    computeAdvanceUnicode,
}
