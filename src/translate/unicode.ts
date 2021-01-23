import {Char, Io, isUndefined, SPACE, splitWord, sumTexts, Word} from "@sagittal/general"
import {caseDesensitize} from "./case"
import {Code, computeUnicodeFromUnicodeLiteral, isUnicodeLiteral, Unicode} from "./codes"
import {EMPTY_UNICODE} from "./constants"
import {
    computeAdvanceUnicode,
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
    computeUnicodeWidth,
    getUnicodeGivenClefAndPosition,
    isCommandifiedStaffUnicode,
    isManualAdvanceUnicode,
    isPositionUnicode,
    smarts,
} from "./smarts"

const shouldNotBeDisplayed = (unicode: Unicode & Word): boolean =>
    isPositionUnicode(unicode)
    || isManualAdvanceUnicode(unicode)
    || isCommandifiedStaffUnicode(unicode)

const computeMaybeNotDisplayedUnicode = (unicode: Unicode & Word): Unicode & Word =>
    shouldNotBeDisplayed(unicode) ?
        EMPTY_UNICODE as Unicode & Word :
        unicode

const computeUnrecognizedUnicode = (input: Io & Word): Unicode & Word => {
    let unicodeWord = computeEndOfLineUnicodeClauseAndUpdateSmarts() as Unicode as Unicode & Word

    const staveOn = smarts.staveOn
    smarts.staveOn = false

    splitWord(input).forEach((char: Io & Char): void => {
        const charFallenBackAsUnicodeWord = char as string as Unicode & Word
        unicodeWord = sumTexts(
            unicodeWord,
            charFallenBackAsUnicodeWord,
            computeAdvanceUnicode(computeUnicodeWidth(charFallenBackAsUnicodeWord)) as Unicode as Unicode & Word,
        )
    })

    unicodeWord = sumTexts( // To separate multiple unrecognized codes in a row, and ensure next glyph on stave if on.
        unicodeWord,
        computeAdvanceUnicode(computeUnicodeWidth(SPACE as Unicode & Word)) as Unicode as Unicode & Word,
    )
    smarts.staveOn = staveOn

    return unicodeWord
}

const getUnicode = (input: Io & Word): Unicode & Word => {
    const caseDesensitizedCode = caseDesensitize(input as Code & Word)
    const unicode = getUnicodeGivenClefAndPosition(caseDesensitizedCode)

    if (!isUndefined(unicode)) return unicode

    if (isUnicodeLiteral(input)) return computeUnicodeFromUnicodeLiteral(input)

    // Fall back to user input.
    return computeUnrecognizedUnicode(input)
}

export {
    shouldNotBeDisplayed,
    computeMaybeNotDisplayedUnicode,
    getUnicode,
}
