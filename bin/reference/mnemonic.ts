import {BLANK, Char, Count, increment, Index, joinWords, Name, SPACE, splitWord, Unicode, Word} from "@sagittal/general"
import {Code, computeSmuflCode, fixSmuflCapitalizationIssue, updateEhejipn} from "../codes"
import {separateWordsBySpacesForMnemonic} from "../separate"
import {computeCaseModifiedGlyphNameWord, matchesCaseAgnostic} from "./case"
import {shouldCountAgainstMnemonicizedCharAllotmentForWord} from "./count"
import {rejoinSagittalCommaNames, unjoinTabClefs} from "./exceptions"
import {Mnemonic, ShouldMnemonicizeParameters} from "./types"

const shouldMnemonicize = ({
    glyphNameChar,
    code,
    codeIndex,
    codeCharsAlreadyMatchedByThisMnemonicWord,
}: ShouldMnemonicizeParameters): boolean =>
    codeIndex < code.length
    && matchesCaseAgnostic({glyphNameChar, code, codeIndex})
    && codeCharsAlreadyMatchedByThisMnemonicWord < 2

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
            if (shouldMnemonicize({glyphNameChar, code, codeIndex, codeCharsAlreadyMatchedByThisMnemonicWord})) {
                mnemonicWord = `${mnemonicWord}<u>${glyphNameChar}</u>` as Mnemonic & Word
                codeIndex = increment(codeIndex)
                if (shouldCountAgainstMnemonicizedCharAllotmentForWord(glyphNameChar, caseModifiedGlyphNameWord)) {
                    codeCharsAlreadyMatchedByThisMnemonicWord = increment(codeCharsAlreadyMatchedByThisMnemonicWord)
                }
            } else {
                mnemonicWord = `${mnemonicWord}${glyphNameChar}` as Mnemonic & Word
            }
        })

        return mnemonicWord
    })

    return joinWords(...mnemonicWords).replace(/<\/u><u>/g, BLANK) as Mnemonic
}

export {
    computeMnemonic,
}
