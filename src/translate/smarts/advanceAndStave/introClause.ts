import {Clause, Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {updateSmartAdvance} from "./advance"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"
import {BREAK_UNICODE} from "./constants"
import {isManualAdvanceUnicode, isSmartAdvanceUnicode, isSpacingUnicode} from "./isUnicode"
import {computeManualAdvanceWidth} from "./manualAdvance"
import {computeSpacing} from "./spacing"
import {updateSmartStave} from "./stave"

const computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts = (
    unicode: Unicode & Word,
): Unicode & Clause => {
    let smartAdvanceAndSmartStaveUnicodeIntroClause: Unicode & Clause

    if (isSmartAdvanceUnicode(unicode)) {
        smartAdvanceAndSmartStaveUnicodeIntroClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (isManualAdvanceUnicode(unicode)) {
        const manualAdvanceWidth = computeManualAdvanceWidth(unicode)
        smartAdvanceAndSmartStaveUnicodeIntroClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                manualAdvanceWidth,
            )
    } else if (unicode === BREAK_UNICODE) {
        smartAdvanceAndSmartStaveUnicodeIntroClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
        smarts.staveWidth = 0 as Octals
    } else if (isSpacingUnicode(unicode)) {
        smarts.spacing = computeSpacing(unicode)
        smartAdvanceAndSmartStaveUnicodeIntroClause = EMPTY_UNICODE as Unicode & Clause
    } else {
        updateSmartStave(unicode)
        updateSmartAdvance(unicode)

        smartAdvanceAndSmartStaveUnicodeIntroClause = EMPTY_UNICODE as Unicode & Clause
    }

    return smartAdvanceAndSmartStaveUnicodeIntroClause
}

export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
}
