import {Char, Count, increment, Index, joinWords, Name, SPACE, splitWord, Word} from "@sagittal/general"
import {Code, Unicode} from "../../src"
import {computeSmuflCode, fixSmuflCapitalizationIssue, separateWordsBySpaces, updateEhejipn} from "../codes"
import {Mnemonic} from "./types"

const rejoinNumbers = (glyphName: Name<Unicode>): Name<Unicode> =>
    glyphName
        .replace(/(\d+)\s+(\d+)/g, "$1$2") as Name<Unicode>

const computeMnemonic = (glyphName: Name<Unicode>): Mnemonic => {
    const code = computeSmuflCode(glyphName)
    const glyphNameWords = rejoinNumbers(separateWordsBySpaces(fixSmuflCapitalizationIssue(updateEhejipn(glyphName))))
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

    return joinWords(...mnemonicWords) as Mnemonic
}

export {
    computeMnemonic,
}
