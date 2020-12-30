import {Clause, extendClause, max, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {computeUnicodeWidth} from "../advanceAndStave"
import {smarts} from "../globals"
import {canBePositioned, updateSmartClef, updateSmartPosition} from "../positionAndClef"
import {LEGER_LINE_UNICODE, NOT_SMuFL_ZERO_POSITION_UNICODE} from "./constants"
import {computeSmartLegerUnicodeIntroClause, needsLegerLine} from "./leger"

const computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts = (
    unicode: Unicode & Word,
): Unicode & Clause => {
    updateSmartClef(unicode)
    updateSmartPosition(unicode)

    let smartPositionAndSmartClefUnicodeIntroClause = EMPTY_UNICODE as Unicode & Clause
    if (needsLegerLine(unicode)) {
        smartPositionAndSmartClefUnicodeIntroClause = sumTexts(
            smartPositionAndSmartClefUnicodeIntroClause,
            computeSmartLegerUnicodeIntroClause(),
        ) as Unicode & Clause
        smarts.advanceWidth = max(smarts.advanceWidth, computeUnicodeWidth(LEGER_LINE_UNICODE))
    }

    if (canBePositioned(unicode) && smarts.positionUnicode !== NOT_SMuFL_ZERO_POSITION_UNICODE) {
        smartPositionAndSmartClefUnicodeIntroClause = extendClause(
            smartPositionAndSmartClefUnicodeIntroClause,
            smarts.positionUnicode,
        ) as Unicode & Clause
    }

    return smartPositionAndSmartClefUnicodeIntroClause
}

export {
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
}
