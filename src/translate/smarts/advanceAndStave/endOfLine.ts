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
        computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
            computeEndOfLineWidth(),
        ),
        computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
            smarts.staveWidth,
        ),
    )

export {
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
}
