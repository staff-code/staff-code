import {Code, Symbol, Unicode, Width} from "../codes"

interface Smarts {
    advanceWidth: Width,
    staveWidth: Width,
    spacing: Width,
    staveOn: boolean,
    commenting: boolean,
    position: Unicode,
    codeMap: Record<Code, Symbol>
}

export {
    Smarts,
}
