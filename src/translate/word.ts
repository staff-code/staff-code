import {Clause, Io, sumTexts, Unicode, Word} from "@sagittal/general"
import {
    computeCommandUnicodeClauseAndUpdateSmarts,
    computeCommentingUnicodeClauseAndUpdateSmarts,
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    computeUnrecognizedUnicodeClauseAndUpdateSmarts,
    isCommandCode,
    isCommenting,
    isUnrecognizedCode,
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
