import {Clause, subtract, sumTexts} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"

const computeAdvanceToEndOfInkWidth = (): Octals => {
    const unspacedAdvance = subtract(smarts.advanceWidth, smarts.spacing)

    return unspacedAdvance < 0 ? 0 as Octals : unspacedAdvance
}

const computeBasicallySmartAdvanceExceptWithoutSpacingSinceThereIsNothingToSpaceAgainst = (): Unicode & Clause =>
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
        computeAdvanceToEndOfInkWidth(),
    )

const computeWhateverAdvanceYouThenNeedToMakeItToTheEndOfTheStaveSegmentYouHaveLandedOn = (): Unicode & Clause =>
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
        smarts.staveWidth,
    )

const computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts = (): Unicode & Clause =>
    sumTexts(
        computeBasicallySmartAdvanceExceptWithoutSpacingSinceThereIsNothingToSpaceAgainst(),
        computeWhateverAdvanceYouThenNeedToMakeItToTheEndOfTheStaveSegmentYouHaveLandedOn(),
    )

export {
    computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts,
    computeAdvanceToEndOfInkWidth,
}
