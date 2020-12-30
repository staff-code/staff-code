import {Clause, subtract, sumTexts} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeAdvanceUnicode} from "./advance"
import {
    MAX_STAVE_UNICODE,
    MAX_STAVE_WIDTH,
    MAX_STAVE_WIDTH_ADVANCE,
    MED_STAVE_UNICODE,
    MED_STAVE_WIDTH,
    MED_STAVE_WIDTH_ADVANCE,
    MIN_STAVE_UNICODE,
    MIN_STAVE_WIDTH,
    MIN_STAVE_WIDTH_ADVANCE,
} from "./constants"

const computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak = (
    width: Octals,
): Unicode & Clause => {
    let advanceUnicodeIntroClause: Unicode & Clause
    if (smarts.staveWidth >= width) {
        smarts.staveWidth = subtract(smarts.staveWidth, width)

        advanceUnicodeIntroClause = computeAdvanceUnicode(width)
    } else if (!smarts.staveOn) {
        advanceUnicodeIntroClause = computeAdvanceUnicode(width)
    } else {
        const useUpExistingStaveAdvanceUnicode: Unicode = computeAdvanceUnicode(smarts.staveWidth)
        let remainingAdvanceWidthWeStillNeedToApply: Octals = subtract(width, smarts.staveWidth)

        let staveAndAdvanceUnicode = "" as Unicode

        while (remainingAdvanceWidthWeStillNeedToApply > MAX_STAVE_WIDTH) {
            staveAndAdvanceUnicode = sumTexts(staveAndAdvanceUnicode, MAX_STAVE_UNICODE, MAX_STAVE_WIDTH_ADVANCE)
            remainingAdvanceWidthWeStillNeedToApply = subtract(remainingAdvanceWidthWeStillNeedToApply, MAX_STAVE_WIDTH)
        }

        while (remainingAdvanceWidthWeStillNeedToApply > MED_STAVE_WIDTH) {
            staveAndAdvanceUnicode = sumTexts(staveAndAdvanceUnicode, MED_STAVE_UNICODE, MED_STAVE_WIDTH_ADVANCE)
            remainingAdvanceWidthWeStillNeedToApply = subtract(remainingAdvanceWidthWeStillNeedToApply, MED_STAVE_WIDTH)
        }

        while (remainingAdvanceWidthWeStillNeedToApply > MIN_STAVE_WIDTH) {
            staveAndAdvanceUnicode = sumTexts(staveAndAdvanceUnicode, MIN_STAVE_UNICODE, MIN_STAVE_WIDTH_ADVANCE)
            remainingAdvanceWidthWeStillNeedToApply = subtract(remainingAdvanceWidthWeStillNeedToApply, MIN_STAVE_WIDTH)
        }

        const remainingStaveAdvanceUnicode = computeAdvanceUnicode(remainingAdvanceWidthWeStillNeedToApply)

        smarts.staveWidth = subtract(MIN_STAVE_WIDTH, remainingAdvanceWidthWeStillNeedToApply)

        advanceUnicodeIntroClause = sumTexts(
            useUpExistingStaveAdvanceUnicode,
            staveAndAdvanceUnicode,
            MIN_STAVE_UNICODE,
            remainingStaveAdvanceUnicode,
        ) as Unicode & Clause
    }

    smarts.advanceWidth = 0 as Octals

    return advanceUnicodeIntroClause
}

export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak,
}
