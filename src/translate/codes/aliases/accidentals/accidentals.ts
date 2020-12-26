import {RecordKey} from "@sagittal/general"
import {Code, Symbol} from "../../types"
import {CONVENTIONAL_ACCIDENTAL_ALIASES_MAP} from "./conventional"
import {EHEJIPN_ACCIDENTAL_ALIASES_MAP} from "./ehejipn"
import {SAGITTAL_ACCIDENTAL_ALIASES_MAP} from "./sagittal"
import {UNCONVENTIONAL_ACCIDENTAL_ALIASES_MAP} from "./unconventional"
import {UPS_AND_DOWNS_ACCIDENTAL_ALIASES_MAP} from "./upsAndDowns"

const ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code>, Symbol> = {
    ...CONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
    ...EHEJIPN_ACCIDENTAL_ALIASES_MAP,
    ...SAGITTAL_ACCIDENTAL_ALIASES_MAP,
    ...UNCONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
    ...UPS_AND_DOWNS_ACCIDENTAL_ALIASES_MAP,
}

export {
    ACCIDENTAL_ALIASES_MAP,
}
