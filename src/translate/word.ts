import {Clause, Io, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "./codes"
import {
    AltAdvance,
    computeCommandUnicodeClauseAndUpdateSmarts,
    computeCommentingUnicodeClauseAndUpdateSmarts,
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    computeUnrecognizedUnicodeClauseAndUpdateSmarts,
    isCommandCode,
    isCommenting,
    isUnrecognizedCode,
    smarts,
} from "./smarts"
import {computeMaybeNotDisplayedUnicode, getUnicode} from "./unicode"

const computeGlyphUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    const unicode = getUnicode(input)

    const smartAdvanceAndSmartStaveUnicodeIntroClause: Unicode & Clause =
        computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts(unicode)
    const smartPositionAndSmartClefUnicodeIntroClause: Unicode & Clause =
        computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts(unicode)
    const introClauseUnicode = sumTexts(
        smartAdvanceAndSmartStaveUnicodeIntroClause,
        smartPositionAndSmartClefUnicodeIntroClause,
    )

    const displayUnicode = computeMaybeNotDisplayedUnicode(unicode)

    smarts.altAdvance = AltAdvance.NONE

    return sumTexts(introClauseUnicode, displayUnicode as Unicode) as Unicode & Clause
}

const computeInputUnicodeClause = (input: Io & Word): Unicode & Clause => {
    if (isCommenting(input)) {
        return computeCommentingUnicodeClauseAndUpdateSmarts(input)
    } else if (isCommandCode(input)) {
        return computeCommandUnicodeClauseAndUpdateSmarts(input)
    } else if (isUnrecognizedCode(input)) {
        return computeUnrecognizedUnicodeClauseAndUpdateSmarts(input)
    } else {
        return computeGlyphUnicodeClauseAndUpdateSmarts(input)
    }
}

export {
    computeInputUnicodeClause,
}
