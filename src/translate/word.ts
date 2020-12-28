import {Clause, extendClause, Io, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "./codes"
import {EMPTY_UNICODE} from "./constants"
import {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStave,
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    isCommenting,
} from "./smarts"
import {computeMaybeNotDisplayedUnicode, getUnicode} from "./unicode"

const computeInputUnicodeClause = (input: Io & Word): Unicode & Clause => {
    if (isCommenting(input)) return EMPTY_UNICODE as Unicode & Clause

    const unicode = getUnicode(input)

    const smartAdvanceAndSmartStaveUnicodeIntroClause: Unicode & Clause =
        computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStave(unicode)
    const smartPositionAndSmartClefUnicodeIntroClause: Unicode & Clause =
        computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts(unicode)
    const introClauseUnicode = sumTexts(
        smartAdvanceAndSmartStaveUnicodeIntroClause,
        smartPositionAndSmartClefUnicodeIntroClause,
    )

    const displayUnicode = computeMaybeNotDisplayedUnicode(unicode)
    const inputUnicodeClause = extendClause(introClauseUnicode, displayUnicode)

    // tslint:disable-next-line
    // console.warn(`${input} → ${computeCodeSentenceFromUnicodeSentence(unicode)}\nsmarts: ${stringify(smarts)}\n`)

    return inputUnicodeClause as Unicode & Clause
}


export {
    computeInputUnicodeClause,
}
