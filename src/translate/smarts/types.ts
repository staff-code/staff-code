import {RecordKey, Word} from "@sagittal/general"
import {Code, Octels, Symbol, Unicode} from "../codes"

interface Smarts {
    advanceWidth: Octels,
    staveWidth: Octels,
    spacing: Octels,
    staveOn: boolean,
    commenting: boolean,
    position: Unicode & Word,
    codeMap: Record<RecordKey<Code & Word>, Symbol>
}

export {
    Smarts,
}
