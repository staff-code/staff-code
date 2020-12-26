import {RecordKey} from "@sagittal/general"
import {Code, Octels, Symbol, Unicode} from "../codes"

interface Smarts {
    advanceWidth: Octels,
    staveWidth: Octels,
    spacing: Octels,
    staveOn: boolean,
    commenting: boolean,
    position: Unicode,
    codeMap: Record<RecordKey<Code>, Symbol>
}

export {
    Smarts,
}
