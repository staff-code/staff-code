export {smarts} from "./globals"
export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
    isManualAdvanceUnicode,
    computeCommandUnicodeClauseAndUpdateSmarts,
    isCommandCode,
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
} from "./advanceAndStave"
export {INITIAL_SMARTS} from "./constants"
export {isCommenting} from "./comments"
export {
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    getUnicodeGivenClefAndPosition,
    isPositionUnicode,
    isCommandifiedStaffUnicode,
} from "./positionAndClef"
