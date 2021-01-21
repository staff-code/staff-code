export {smarts} from "./globals"
export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
    isManualAdvanceUnicode,
    computeCommandUnicodeClauseAndUpdateSmarts,
    isCommandCode,
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
} from "./advanceAndStave"
export {INITIAL_SMARTS} from "./constants"
export {computeIsCommentingAndUpdateSmarts} from "./comments"
export {
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    getUnicodeGivenClefAndPosition,
    isCommandifiedStaffUnicode,
    isPositionUnicode,
} from "./positionAndClef"
