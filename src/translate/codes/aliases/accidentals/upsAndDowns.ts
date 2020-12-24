import {SMuFL_MAP} from "../../smufl"
import {Code, Symbol} from "../../types"

// See: https://w3c.github.io/smufl/gitbook/tables/arrows-and-arrowheads.html

const UPS_AND_DOWNS_ACCIDENTAL_ALIASES_MAP: Record<Code, Symbol> = {
    [Code[`^`]]: SMuFL_MAP[Code[`acupandnup`]],
    [Code[`v`]]: SMuFL_MAP[Code[`acupandndn`]],
    [Code[`/`]]: SMuFL_MAP[Code[`acupandnmr`]], // *
    [Code[`\\`]]: SMuFL_MAP[Code[`acupandnls`]], // *
} as Record<Code, Symbol>

// * Probably the same as lift and drop (https://en.xen.wiki/w/Ups_and_Downs_Notation#Extremely_Large_EDOs)

export {
    UPS_AND_DOWNS_ACCIDENTAL_ALIASES_MAP,
}
