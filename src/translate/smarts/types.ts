import {RecordKey} from "@sagittal/general"
import {Codeword, Octels, Symbol, Unicode} from "../codes"

interface Smarts {
    advanceWidth: Octels,
    staveWidth: Octels,
    spacing: Octels,
    staveOn: boolean,
    commenting: boolean,
    position: Unicode,
    codewordMap: Record<RecordKey<Codeword>, Symbol>
}

export {
    Smarts,
}
