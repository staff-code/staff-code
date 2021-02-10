import {Clause, subtract, sumTexts, Unicode} from "@sagittal/general"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrNewline} from "./advanceOrNewline"
import {Octals} from "./types"

const computeAdvanceToEndOfInkWidth = (): Octals => {
    const unspacedAdvance = subtract(smarts.advanceWidth, smarts.spacing)

    return unspacedAdvance < 0 ? 0 as Octals : unspacedAdvance
}

const computeBasicallySmartAdvanceExceptWithoutSpacingSinceThereIsNothingToSpaceAgainst = (): Unicode & Clause =>
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrNewline(
        computeAdvanceToEndOfInkWidth(),
    )

const computeWhateverAdvanceYouThenNeedToMakeItToTheEndOfTheStaveSegmentYouHaveLandedOn = (): Unicode & Clause =>
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrNewline(
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
