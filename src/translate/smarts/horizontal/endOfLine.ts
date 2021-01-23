import {Clause, subtract, sumTexts} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"

const computeEndOfLineWidth = (): Octals => {
    const unspacedAdvance = subtract(smarts.advanceWidth, smarts.spacing)

    return unspacedAdvance < 0 ? 0 as Octals : unspacedAdvance
}

const computeEndOfLineUnicodeClauseAndUpdateSmarts = (): Unicode & Clause =>
    sumTexts(
        // TODO: CLEAN, READY TO GO: COMMENT OR NAMED FUNCTION THESE END-OF-LINE THINGS
        //  Because I cannot figure out why the hell they have to be this way now...
        computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
            computeEndOfLineWidth(),
        ),
        computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
            smarts.staveWidth,
        ),
    )

export {
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
    computeEndOfLineWidth,
}
