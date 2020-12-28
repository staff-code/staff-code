import {RecordKey, Word} from "@sagittal/general"
import {LowercasedCode, Octels, Unicode} from "../codes"

interface Smarts {
    advanceWidth: Octels,
    staveWidth: Octels,
    spacing: Octels,
    staveOn: boolean,
    commenting: boolean,
    position: Unicode & Word,
    lowercasedCodeMap: Record<RecordKey<LowercasedCode & Word>, Unicode & Word>
}

export {
    Smarts,
}
