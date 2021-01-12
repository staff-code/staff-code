import {Char, Count, increment, Index, joinWords, Name, SPACE, splitWord, Word} from "@sagittal/general"
import {Code, Unicode} from "../../src"
import {computeSmuflCode, fixSmuflCapitalizationIssue, updateEhejipn} from "../codes"
import {separateWordsBySpacesForMnemonic} from "../separate"
import {isBoldable} from "./boldable"
import {Mnemonic} from "./types"

const ORDINAL_SUFFIXES = ["st", "nd", "rd"]

const computeMnemonic = (glyphName: Name<Unicode>): Mnemonic => {
    const code = computeSmuflCode(glyphName)
    const glyphNameWords = separateWordsBySpacesForMnemonic(fixSmuflCapitalizationIssue(updateEhejipn(glyphName)))
        .split(SPACE) as Array<Name<Unicode> & Word>

    let codeIndex = 0 as Index<Code & Char>
    const mnemonicWords = glyphNameWords.map((glyphNameWord: Name<Unicode> & Word): Mnemonic & Word => {
        let caseModifiedGlyphNameWord = glyphNameWord.length === 1 ?
            glyphNameWord.toUpperCase() as Name<Unicode> & Word :
            glyphNameWord.toLowerCase() as Name<Unicode> & Word

        if (ORDINAL_SUFFIXES.includes(caseModifiedGlyphNameWord)) {
            return caseModifiedGlyphNameWord as Word as Mnemonic & Word
        }

        let mnemonicWord = "" as Mnemonic & Word
        let codeCharsAlreadyMatchedByThisMnemonicWord = 0 as Count<Code & Char>
        splitWord(caseModifiedGlyphNameWord).forEach((glyphNameChar: Name<Unicode> & Char): void => {
            if (
                glyphNameChar === code[codeIndex]
                && isBoldable({caseModifiedGlyphNameWord, glyphNameChar, codeCharsAlreadyMatchedByThisMnemonicWord})
            ) {
                mnemonicWord = `${mnemonicWord}<b>${glyphNameChar}</b>` as Mnemonic & Word
                codeIndex = increment(codeIndex)
                codeCharsAlreadyMatchedByThisMnemonicWord = increment(codeCharsAlreadyMatchedByThisMnemonicWord)
            } else {
                mnemonicWord = `${mnemonicWord}${glyphNameChar}` as Mnemonic & Word
            }
        })

        return mnemonicWord
    })

    return joinWords(...mnemonicWords) as Mnemonic
}

export {
    computeMnemonic,
}
