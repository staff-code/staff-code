import {Clause, subtract, sumTexts} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"

const computeEndOfLineWidth = (): Octals => {
    const unspacedAdvance = subtract(smarts.advanceWidth, smarts.spacing)

    return unspacedAdvance < 0 ? 0 as Octals : unspacedAdvance
}

const computeBasicallySmartAdvanceExceptWithoutSpacingSinceThereIsNothingToSpaceAgainst = (): Unicode & Clause =>
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
        computeEndOfLineWidth(),
    )

const computeWhateverAdvanceYouThenNeedToMakeItToTheEndOfTheStaveSegmentYouHaveLandedOn = (): Unicode & Clause =>
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
    smarts.staveWidth,
)

const computeEndOfLineUnicodeClauseAndUpdateSmarts = (): Unicode & Clause =>
    sumTexts(
        computeBasicallySmartAdvanceExceptWithoutSpacingSinceThereIsNothingToSpaceAgainst(),
        computeWhateverAdvanceYouThenNeedToMakeItToTheEndOfTheStaveSegmentYouHaveLandedOn(),
    )

export {
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
    computeEndOfLineWidth,
}
