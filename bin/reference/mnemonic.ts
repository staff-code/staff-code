import {Char, Count, Html, increment, Index, joinWords, Name, Sentence, SPACE, splitWord, Word} from "@sagittal/general"
import {Code, Unicode} from "../../src"
import {computeSmuflCode, fixSmuflCapitalizationIssue, separateWordsBySpaces, updateEhejipn} from "../codes"

const computeMnemonic = (glyphName: Name<Unicode>): Html => {
    const code = computeSmuflCode(glyphName)
    const glyphNameWords = separateWordsBySpaces(fixSmuflCapitalizationIssue(updateEhejipn(glyphName)))
        .split(SPACE) as Array<Name<Unicode> & Word>

    let codeIndex = 0 as Index<Code & Char>
    const mnemonicWords = [] as Array<Html & Word>
    glyphNameWords.forEach((glyphNameWord: Name<Unicode> & Word): void => {
        let caseModifiedGlyphNameWord = glyphNameWord.length === 1 ?
            glyphNameWord.toUpperCase() as Name<Unicode> & Word :
            glyphNameWord.toLowerCase() as Name<Unicode> & Word

        let mnemonicWord = "" as Word & Html
        let codeCharsAlreadyMatchedByThisMnemonicWord = 0 as Count<Code & Char>
        splitWord(caseModifiedGlyphNameWord).forEach((glyphNameChar: Name<Unicode> & Char): void => {
            if (glyphNameChar === code[codeIndex] && codeCharsAlreadyMatchedByThisMnemonicWord < 2) {
                mnemonicWord = `${mnemonicWord}<b>${glyphNameChar}</b>` as Word & Html
                codeIndex = increment(codeIndex)
                codeCharsAlreadyMatchedByThisMnemonicWord = increment(codeCharsAlreadyMatchedByThisMnemonicWord)
            } else {
                mnemonicWord = `${mnemonicWord}${glyphNameChar}` as Word & Html
            }
        })
        mnemonicWords.push(mnemonicWord)
    })

    return joinWords(...mnemonicWords) as Html & Sentence
}

export {
    computeMnemonic,
}
