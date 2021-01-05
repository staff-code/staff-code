import {Clause, sumTexts, Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {updateSmartAdvance} from "./advance"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"
import {ADVANCE_TO_END_UNICODE, BREAK_UNICODE, SMART_ADVANCE_UNICODE} from "./constants"
import {computeAdvanceToEndIntroClauseAndUpdateSmarts} from "./end"
import {isManualAdvanceUnicode, isSpacingUnicode} from "./isUnicode"
import {computeManualAdvanceWidth} from "./manualAdvance"
import {computeSpacing} from "./spacing"
import {updateSmartStave} from "./stave"

const computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts = (
    unicode: Unicode & Word,
): Unicode & Clause => {
    let smartAdvanceAndSmartStaveUnicodeIntroClause: Unicode & Clause

    // TODO: CLEAN: IS IT REALLY INTRO CLAUSE HERE?
    //  I don't think any of these are ever actually "intro clause" or "prefix" because whenever they happen
    //  Nothing else comes afterwards
    if (unicode === SMART_ADVANCE_UNICODE) {
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
    } else if (unicode === ADVANCE_TO_END_UNICODE) {
        smarts.advanceToEnd = true
        smartAdvanceAndSmartStaveUnicodeIntroClause = EMPTY_UNICODE as Unicode & Clause
    } else {
        updateSmartStave(unicode)

        if (smarts.staveOn && smarts.advanceToEnd) {
            smartAdvanceAndSmartStaveUnicodeIntroClause = sumTexts(
                computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                    smarts.advanceWidth,
                ),
                computeAdvanceToEndIntroClauseAndUpdateSmarts(unicode),
            )
        } else {
            updateSmartAdvance(unicode)
            smartAdvanceAndSmartStaveUnicodeIntroClause = EMPTY_UNICODE as Unicode & Clause
        }
    }

    return smartAdvanceAndSmartStaveUnicodeIntroClause
}

export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
}
