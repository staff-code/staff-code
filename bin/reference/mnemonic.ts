import {Char, Count, increment, Index, joinWords, Name, SPACE, splitWord, Word} from "@sagittal/general"
import {Code, Unicode} from "../../src"
import {computeSmuflCode, fixSmuflCapitalizationIssue, separateWordsBySpaces, updateEhejipn} from "../codes"
import {Mnemonic} from "./types"

const rejoinNumbersAndOrdinalSuffixes = (mnemonic: Mnemonic): Mnemonic =>
    mnemonic
        .replace(/(<b>\d+<\/b>)\s+(?=<b>\d+<\/b>)/g, "$1")
        .replace(/(\d+<\/b>)\s+st(\s|$)/g, "$1st$2")
        .replace(/(\d+<\/b>)\s+nd(\s|$)/g, "$1nd$2")
        .replace(/(\d+<\/b>)\s+th(\s|$)/g, "$1th$2") as Mnemonic

const computeMnemonic = (glyphName: Name<Unicode>): Mnemonic => {
    const code = computeSmuflCode(glyphName)
    const glyphNameWords = separateWordsBySpaces(fixSmuflCapitalizationIssue(updateEhejipn(glyphName)))
        .split(SPACE) as Array<Name<Unicode> & Word>

    let codeIndex = 0 as Index<Code & Char>
    const mnemonicWords = [] as Array<Mnemonic & Word>
    glyphNameWords.forEach((glyphNameWord: Name<Unicode> & Word): void => {
        let caseModifiedGlyphNameWord = glyphNameWord.length === 1 ?
            glyphNameWord.toUpperCase() as Name<Unicode> & Word :
            glyphNameWord.toLowerCase() as Name<Unicode> & Word

        let mnemonicWord = "" as Mnemonic & Word
        let codeCharsAlreadyMatchedByThisMnemonicWord = 0 as Count<Code & Char>
        splitWord(caseModifiedGlyphNameWord).forEach((glyphNameChar: Name<Unicode> & Char): void => {
            if (glyphNameChar === code[codeIndex] && codeCharsAlreadyMatchedByThisMnemonicWord < 2) {
                mnemonicWord = `${mnemonicWord}<b>${glyphNameChar}</b>` as Mnemonic & Word
                codeIndex = increment(codeIndex)
                codeCharsAlreadyMatchedByThisMnemonicWord = increment(codeCharsAlreadyMatchedByThisMnemonicWord)
            } else {
                mnemonicWord = `${mnemonicWord}${glyphNameChar}` as Mnemonic & Word
            }
        })
        mnemonicWords.push(mnemonicWord)
    })

    return rejoinNumbersAndOrdinalSuffixes(joinWords(...mnemonicWords)) as Mnemonic
}

export {
    computeMnemonic,
}
