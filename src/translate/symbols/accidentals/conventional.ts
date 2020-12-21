import {Code, Symbol} from "../types"

const CONVENTIONAL_ACCIDENTAL_MAP: Record<Code, Symbol> = {
    /*U+E261*/[Code[`h`]]: {unicode: "", width: 5, description: "natural"},
    /*U+E262*/[Code[`#`]]: {unicode: "", width: 8, description: "sharp"},
    /*U+E260*/[Code[`b`]]: {unicode: "", width: 7, description: "flat"},
    /*U+E47D*/[Code[`x`]]: {unicode: "", width: 11, description: "double sharp"},
    /*U+E264*/[Code[`bb`]]: {unicode: "", width: 13, description: "double flat"},
} as Record<Code, Symbol>

CONVENTIONAL_ACCIDENTAL_MAP[Code[`n`]] = CONVENTIONAL_ACCIDENTAL_MAP[Code[`h`]]

export {
    CONVENTIONAL_ACCIDENTAL_MAP,
}
