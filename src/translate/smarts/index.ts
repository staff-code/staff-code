export {smarts} from "./globals"
export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
    isManualAdvanceUnicode,
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
    collapseAdvances,
    computeAdvanceUnicode,
    computeUnicodeWidth,
    computeEndOfLineWidth,
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak,
    computeSmartStaveOffUnicodeClauseAndUpdateSmarts,
} from "./horizontal"
export {computeCommandUnicodeClauseAndUpdateSmarts} from "./command"
export {INITIAL_SMARTS} from "./constants"
export {computeIsCommentingAndUpdateSmarts} from "./comments"
export {
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    getUnicodeGivenClefAndPosition,
    isCommandifiedStaffUnicode,
    isPositionUnicode,
} from "./vertical"
export {computeUnrecognizedUnicodeClause, } from "./unrecognized"
export {isCommandCode, isUnrecognizedCode} from "./isCode"
