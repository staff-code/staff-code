import {Clause, extendClause, Io, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "./codes"
import {EMPTY_UNICODE} from "./constants"
import {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStave,
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    isCommenting,
} from "./smarts"
import {computeSymbol} from "./symbol"
import {computeUnicode} from "./unicode"

const computeInputUnicodeClause = (input: Io & Word): Unicode & Clause => {
    if (isCommenting(input)) return EMPTY_UNICODE as Unicode & Clause

    const symbol = computeSymbol(input)

    const smartAdvanceAndSmartStaveUnicodeIntroClause: Unicode & Clause =
        computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStave(symbol)
    const smartPositionAndSmartClefUnicodeIntroClause: Unicode & Clause =
        computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts(symbol)
    const introClauseUnicode = sumTexts(
        smartAdvanceAndSmartStaveUnicodeIntroClause,
        smartPositionAndSmartClefUnicodeIntroClause,
    )

    const symbolUnicode = computeUnicode(symbol)
    const unicode = extendClause(introClauseUnicode, symbolUnicode)

    // tslint:disable-next-line
    // console.warn(`${input} → ${computeCodeSentenceFromUnicodeSentence(unicode)}\nad${smarts.advanceWidth} st${smarts.staveWidth}\n`)

    return unicode as Unicode & Clause
}


export {
    computeInputUnicodeClause,
}
