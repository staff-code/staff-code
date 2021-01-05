export {smarts} from "./globals"
export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
    isManualAdvanceUnicode,
    computeNonsymbolUnicodeClauseAndUpdateSmarts,
    isNonsymbolCode,
} from "./advanceAndStave"
export {INITIAL_SMARTS} from "./constants"
export {isCommenting} from "./comments"
export {
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    getUnicodeGivenClefAndPosition,
    isPositionUnicode,
    isNonsymbolifiedStaffUnicode,
} from "./positionAndClef"
