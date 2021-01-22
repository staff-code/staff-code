export {smarts} from "./globals"
export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
    isManualAdvanceUnicode,
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
    collapseAdvances,
    computeAdvanceUnicode,
    computeUnicodeWidth,
} from "./horizontal"
export {computeCommandUnicodeClauseAndUpdateSmarts, isCommandCode} from "./command"
export {INITIAL_SMARTS} from "./constants"
export {computeIsCommentingAndUpdateSmarts} from "./comments"
export {
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    getUnicodeGivenClefAndPosition,
    isCommandifiedStaffUnicode,
    isPositionUnicode,
} from "./vertical"
