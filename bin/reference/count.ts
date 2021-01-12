import {Char, Name, Word} from "@sagittal/general"
import {Unicode} from "../../src"

const isNumericChar = (glyphNameChar: Name<Unicode> & Char): boolean =>
    !!glyphNameChar.match(/\d/)

const isOrdinalNumericWord = (glyphNameWord: Name<Unicode> & Word): boolean =>
    !!glyphNameWord.match(/\d+st$/)
    || !!glyphNameWord.match(/\d+nd$/)
    || !!glyphNameWord.match(/\d+rd$/)

const shouldCountAgainstBoldedCharAllotmentForWord = (
    glyphNameChar: Name<Unicode> & Char,
    glyphNameWord: Name<Unicode> & Word,
): boolean =>
    (
        isOrdinalNumericWord(glyphNameWord)
        && isNumericChar(glyphNameChar)
    )
    || !isNumericChar(glyphNameChar)

export {
    shouldCountAgainstBoldedCharAllotmentForWord,
}
