import {Clause, max, Word} from "@sagittal/general"
import {Octels, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"
import {BREAK_UNICODE} from "./constants"
import {isManualAdvanceUnicode, isSmartAdvanceUnicode, isSpacingUnicode} from "./isUnicode"
import {computeManualAdvanceWidth} from "./manualAdvance"
import {computeSpacing} from "./spacing"
import {updateSmartStave} from "./updateSmartStave"
import {computeUnicodeWidth} from "./width"

const computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStave = (
    unicode: Unicode & Word,
): Unicode & Clause => {
    let smartAdvanceAndSmartStaveUnicodeIntroClause: Unicode & Clause

    const width = computeUnicodeWidth(unicode)

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
        smarts.staveWidth = 0 as Octels
    } else if (isSpacingUnicode(unicode)) {
        smarts.spacing = computeSpacing(unicode)
        smartAdvanceAndSmartStaveUnicodeIntroClause = EMPTY_UNICODE as Unicode & Clause
    } else {
        updateSmartStave(unicode)

        const maxSymbolWidthSinceLastAdvance = max(smarts.advanceWidth, width)
        smarts.advanceWidth = maxSymbolWidthSinceLastAdvance

        smartAdvanceAndSmartStaveUnicodeIntroClause = EMPTY_UNICODE as Unicode & Clause
    }

    return smartAdvanceAndSmartStaveUnicodeIntroClause
}

export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStave,
}
