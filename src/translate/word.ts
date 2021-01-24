import {Clause, extendClause, Io, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "./codes"
import {EMPTY_UNICODE} from "./constants"
import {
    computeCommandUnicodeClauseAndUpdateSmarts,
    computeIsCommentingAndUpdateSmarts,
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    computeUnrecognizedUnicodeClause,
    isCommandCode,
    isUnrecognizedCode,
} from "./smarts"
import {computeMaybeNotDisplayedUnicode, getUnicode} from "./unicode"

const computeInputUnicodeClause = (input: Io & Word): Unicode & Clause => {
    if (computeIsCommentingAndUpdateSmarts(input)) {
        return EMPTY_UNICODE as Unicode & Clause
    } else if (isCommandCode(input)) {
        const inputUnicodeClause = computeCommandUnicodeClauseAndUpdateSmarts(input)

        // tslint:disable-next-line
        // console.warn(`${input} → ${debugCodeSentence(inputUnicodeClause as Unicode as Unicode & Sentence)}\nsmarts: ${stringify(smarts)}\n`)

        return inputUnicodeClause
    } else if (isUnrecognizedCode(input)) {
        return computeUnrecognizedUnicodeClause(input)
    }

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
    const inputUnicodeClause = extendClause(introClauseUnicode, displayUnicode) as Unicode & Clause

    // tslint:disable-next-line
    // console.warn(`${input} → ${debugCodeSentence(inputUnicodeClause as Unicode as Unicode & Sentence)}\nsmarts: ${stringify(smarts)}\n`)

    return inputUnicodeClause
}

export {
    computeInputUnicodeClause,
}
