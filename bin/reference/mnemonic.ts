import {Char, Count, increment, Index, joinWords, Name, SPACE, splitWord, Word} from "@sagittal/general"
// tslint:disable-next-line no-reaching-imports
import {Code, Unicode} from "../../src/translate"
import {computeSmuflCode, fixSmuflCapitalizationIssue, updateEhejipn} from "../codes"
import {separateWordsBySpacesForMnemonic} from "../separate"
import {shouldBold} from "./bold"
import {computeCaseModifiedGlyphNameWord} from "./case"
import {shouldCountAgainstBoldedCharAllotmentForWord} from "./count"
import {rejoinSagittalCommaNames, unjoinTabClefs} from "./exceptions"
import {Mnemonic} from "./types"

const computeMnemonic = (glyphName: Name<Unicode>): Mnemonic => {
    const code = computeSmuflCode(glyphName)
    const glyphNameWords = unjoinTabClefs(rejoinSagittalCommaNames(
        separateWordsBySpacesForMnemonic(fixSmuflCapitalizationIssue(updateEhejipn(glyphName))),
    ))
        .split(SPACE) as Array<Name<Unicode> & Word>

    let codeIndex = 0 as Index<Code & Char>
    const mnemonicWords = glyphNameWords.map((glyphNameWord: Name<Unicode> & Word): Mnemonic & Word => {
        let caseModifiedGlyphNameWord = computeCaseModifiedGlyphNameWord(glyphNameWord)

        let mnemonicWord = "" as Mnemonic & Word
        let codeCharsAlreadyMatchedByThisMnemonicWord = 0 as Count<Code & Char>
        splitWord(caseModifiedGlyphNameWord).forEach((glyphNameChar: Name<Unicode> & Char): void => {
            if (shouldBold({glyphNameChar, code, codeIndex, codeCharsAlreadyMatchedByThisMnemonicWord})) {
                mnemonicWord = `${mnemonicWord}<u>${glyphNameChar}</u>` as Mnemonic & Word
                codeIndex = increment(codeIndex)
                if (shouldCountAgainstBoldedCharAllotmentForWord(glyphNameChar, caseModifiedGlyphNameWord)) {
                    codeCharsAlreadyMatchedByThisMnemonicWord = increment(codeCharsAlreadyMatchedByThisMnemonicWord)
                }
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
