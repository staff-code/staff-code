import {Char, Count, Html, Id, Index, Link, Name, Unicode, Word} from "@sagittal/general"
import {Code} from "../codes"

type ReferenceRow = [Unicode & Word, Code & Word, Mnemonic]

type Mnemonic = Html & {_MnemonicBrand: boolean}

type Explanation = Html & {_ExpanationBrand: boolean}
type Parenthetical = string & {_ParentheticalBrand: boolean}

// @ts-ignore
type Section = [Id<Section>, Name<Section>, Parenthetical, Link, Explanation, ReferenceRow[]]

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

interface ShouldBoldParameters extends MatchesCaseAgnosticParameters {
    codeCharsAlreadyMatchedByThisMnemonicWord: Count<Code & Char>,
}

export {
    ReferenceRow,
    Section,
    SmuflRangeDatum,
    SmuflRanges,
    Explanation,
    Mnemonic,
    Parenthetical,
    MatchesCaseAgnosticParameters,
    ShouldBoldParameters,
}
