import {Char, Count, Html, Id, Index, Name, Unicode, Word} from "@sagittal/general"
import {Code} from "../codes"

type ReferenceRow = [Unicode & Word, Code & Word, Mnemonic]

type Mnemonic = Html & {_MnemonicBrand: boolean}

// @ts-ignore
type Section = [Id<Section>, Name<Section>, ReferenceRow[]]

interface SmuflRangeDatum {
    description: Name<Section>,
    glyphs: Array<Name<Unicode>>,
}

type SmuflRanges = Record<Id<Section>, SmuflRangeDatum>

interface MatchesCaseAgnosticParameters {
    glyphNameChar: Name<Unicode> & Char,
    code: Code & Word,
    codeIndex: Index<Code & Char>
}

interface ShouldMnemonicizeParameters extends MatchesCaseAgnosticParameters {
    codeCharsAlreadyMatchedByThisMnemonicWord: Count<Code & Char>,
}

export {
    ReferenceRow,
    Section,
    SmuflRangeDatum,
    SmuflRanges,
    Mnemonic,
    MatchesCaseAgnosticParameters,
    ShouldMnemonicizeParameters,
}
