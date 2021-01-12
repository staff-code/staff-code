import {Html, Id, Link, Name, Word} from "@sagittal/general"
import {Code, Unicode} from "../../src"

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

export {
    ReferenceRow,
    Section,
    SmuflRangeDatum,
    SmuflRanges,
    Explanation,
    Mnemonic,
    Parenthetical,
}
