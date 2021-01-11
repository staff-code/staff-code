import {Html, Id, Name, Word} from "@sagittal/general"
import {Code, Unicode} from "../../src"

type ReferenceRow = [Unicode & Word, Code & Word, Html]

// @ts-ignore
type Section = [Id<Section>, Name<Section>, ReferenceRow[]]

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
}
