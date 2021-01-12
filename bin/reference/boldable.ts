import {Char, Count, getChar, Name, Word} from "@sagittal/general"
import {Code, Unicode} from "../../src"

const isNumericChar = (glyphNameChar: Name<Unicode> & Char): boolean =>
    !!glyphNameChar.match(/\d/)

const isNumericWord = (glyphNameWord: Name<Unicode> & Word): boolean =>
    isNumericChar(getChar(glyphNameWord, 0))

const isNumericCharOfNumericWord = (
    glyphNameChar: Name<Unicode> & Char,
    glyphNameWord: Name<Unicode> & Word,
): boolean =>
    isNumericWord(glyphNameWord) && isNumericChar(glyphNameChar)

const isBoldable = ({codeCharsAlreadyMatchedByThisMnemonicWord, glyphNameChar, caseModifiedGlyphNameWord}: {
    codeCharsAlreadyMatchedByThisMnemonicWord: Count<Code & Char>,
    glyphNameChar: Name<Unicode> & Char,
    caseModifiedGlyphNameWord: Name<Unicode> & Word,
}): boolean =>
    codeCharsAlreadyMatchedByThisMnemonicWord < 2
    || isNumericCharOfNumericWord(glyphNameChar, caseModifiedGlyphNameWord)

export {
    isBoldable,
}
