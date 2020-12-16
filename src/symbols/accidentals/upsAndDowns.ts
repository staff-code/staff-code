import {Code, Symbol, Unicode} from "../types"

// See: https://w3c.github.io/smufl/gitbook/tables/arrows-and-arrowheads.html

const UPS_AND_DOWNS_ACCIDENTAL_MAP: Record<Code, Symbol> = {
    /*U+EB88*/[Code["^"]]: {unicode: "" as Unicode},
    /*U+EB8C*/[Code["v"]]: {unicode: "" as Unicode},
} as Record<Code, Symbol>

export {
    UPS_AND_DOWNS_ACCIDENTAL_MAP,
}
