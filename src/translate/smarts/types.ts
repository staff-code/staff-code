import {Code, Symbol, Unicode, Octels} from "../codes"

interface Smarts {
    advanceWidth: Octels,
    staveWidth: Octels,
    spacing: Octels,
    staveOn: boolean,
    commenting: boolean,
    position: Unicode,
    codeMap: Record<Code, Symbol>
}

export {
    Smarts,
}
