import {Code, Symbol} from "../types"
import {CONVENTIONAL_ACCIDENTAL_MAP} from "./conventional"
import {EHEJIPN_ACCIDENTAL_MAP} from "./ehejipn"
import {SAGITTAL_ACCIDENTAL_MAP} from "./sagittal"
import {UNCONVENTIONAL_ACCIDENTAL_MAP} from "./unconventional"
import {UPS_AND_DOWNS_ACCIDENTAL_MAP} from "./upsAndDowns"

const ACCIDENTAL_MAP: Record<Code, Symbol> = {
    ...CONVENTIONAL_ACCIDENTAL_MAP,
    ...EHEJIPN_ACCIDENTAL_MAP,
    ...SAGITTAL_ACCIDENTAL_MAP,
    ...UNCONVENTIONAL_ACCIDENTAL_MAP,
    ...UPS_AND_DOWNS_ACCIDENTAL_MAP,
}

export {
    ACCIDENTAL_MAP,
}
