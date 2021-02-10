import {RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../../bin"
import {SMuFL_MAP} from "../../smufl"

// See: https://w3c.github.io/smufl/gitbook/tables/arrows-and-arrowheads.html

const UPS_AND_DOWNS_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "^": SMuFL_MAP["acupandnup"],
    "v": SMuFL_MAP["acupandndn"],
    ">": SMuFL_MAP["acupandnmr"], // *
    "<": SMuFL_MAP["acupandnls"], // *
} as Record<Code & Word, Unicode & Word>

// * Probably the same as lift and drop (https://en.xen.wiki/w/Ups_and_Downs_Notation#Extremely_Large_EDOs)

export {
    UPS_AND_DOWNS_ACCIDENTAL_ALIASES_MAP,
}
