import {Char, Clause, Io, SPACE, splitWord, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "../codes"
import {smarts} from "./globals"
import {
    computeAdvanceUnicode,
    computeSmartStaveOffUnicodeClauseAndUpdateSmarts,
    computeUnicodeWidth,
} from "./horizontal"

const computeUnrecognizedUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    const staveOn = smarts.staveOn

    let unicodeClause = computeSmartStaveOffUnicodeClauseAndUpdateSmarts()

    splitWord(input).forEach((char: Io & Char): void => {
        const charFallenBackAsUnicodeWord = char as string as Unicode & Word
        unicodeClause = sumTexts(
            unicodeClause,
            charFallenBackAsUnicodeWord as Unicode as Unicode & Clause,
            computeAdvanceUnicode(computeUnicodeWidth(charFallenBackAsUnicodeWord)),
        )
    })

    unicodeClause = sumTexts( // To separate multiple unrecognized codes in a row, and ensure next glyph on stave if on.
        unicodeClause,
        computeAdvanceUnicode(computeUnicodeWidth(SPACE as Unicode & Word)),
    )
    smarts.staveOn = staveOn

    return unicodeClause
}

export {
    computeUnrecognizedUnicodeClauseAndUpdateSmarts,
}
