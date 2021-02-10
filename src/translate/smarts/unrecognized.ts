import {
    ceil,
    Char,
    Clause,
    Decimal,
    divide,
    Divisor,
    floor,
    Io,
    SPACE,
    splitWord,
    sumTexts,
    Unicode,
    Word,
} from "@sagittal/general"
import {smarts} from "./globals"
import {
    computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts,
    computeAdvanceUnicode,
    computeUnicodeWidth, Octals,
} from "./horizontal"

const computeUnrecognizedUnicodeClause = (input: Io & Word): Unicode & Clause => {
    let unicodeClause = "" as Unicode & Clause
    splitWord(input).forEach((char: Io & Char): void => {
        const charFallenBackAsUnicodeWord = char as string as Unicode & Word
        unicodeClause = sumTexts(
            unicodeClause,
            charFallenBackAsUnicodeWord as Unicode as Unicode & Clause,
            computeAdvanceUnicode(computeUnicodeWidth(charFallenBackAsUnicodeWord)),
        )
    })

    return unicodeClause
}

const computeUnrecognizedUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    const staveOn = smarts.staveOn

    const spaceWidth = divide(computeUnicodeWidth(SPACE as Unicode & Word), 2 as Divisor<Octals>)
    const biggerHalfOfSpaceWidth = ceil(spaceWidth) as Octals & Decimal<{integer: true}>
    const smallerHalfOfSpaceWidth = floor(spaceWidth) as Octals & Decimal<{integer: true}>

    let unicodeClause = computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts()
    smarts.staveOn = false

    unicodeClause = sumTexts(
        unicodeClause,
        computeAdvanceUnicode(biggerHalfOfSpaceWidth),
        computeUnrecognizedUnicodeClause(input),
        computeAdvanceUnicode(smallerHalfOfSpaceWidth),
    )

    smarts.staveOn = staveOn

    return unicodeClause
}

export {
    computeUnrecognizedUnicodeClauseAndUpdateSmarts,
}
