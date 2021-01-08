import {Name, Word} from "@sagittal/general"
import {Code, Unicode} from "../../src"

type ReferenceRow = [Unicode & Word, Code & Word, Name<Unicode>]

type SectionName = string & {_SectionNameBrand: boolean}

type ReferenceSection = [SectionName, ReferenceRow[]]

interface SmuflRangeDatum {
    description: SectionName,
    glyphs: Array<Name<Unicode>>,
}

type SectionKey = string & {_SectionKeyBrand: boolean}

type SmuflRanges = Record<SectionKey, SmuflRangeDatum>

export {
    ReferenceRow,
    SectionName,
    ReferenceSection,
    SmuflRangeDatum,
    SmuflRanges,
}
