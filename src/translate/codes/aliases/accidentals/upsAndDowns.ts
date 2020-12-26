import {RecordKey} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Codeword, Symbol} from "../../types"

// See: https://w3c.github.io/smufl/gitbook/tables/arrows-and-arrowheads.html

const UPS_AND_DOWNS_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Codeword>, Symbol> = {
    "^": SMuFL_MAP["acupandnup"],
    "v": SMuFL_MAP["acupandndn"],
    "/": SMuFL_MAP["acupandnmr"], // *
    "\\": SMuFL_MAP["acupandnls"], // *
} as Record<Codeword, Symbol>

// * Probably the same as lift and drop (https://en.xen.wiki/w/Ups_and_Downs_Notation#Extremely_Large_EDOs)

export {
    UPS_AND_DOWNS_ACCIDENTAL_ALIASES_MAP,
}
