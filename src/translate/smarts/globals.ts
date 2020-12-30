import {RecordKey} from "@sagittal/general"
import {Octals, Unicode} from "../codes"
import {bravuraWidthsJson} from "./advanceAndStave"
import {INITIAL_SMARTS} from "./constants"
import {Smarts} from "./types"

const smarts: Smarts = JSON.parse(JSON.stringify(INITIAL_SMARTS))

const bravuraWidths: Record<RecordKey<Unicode>, Octals> = bravuraWidthsJson as Record<RecordKey<Unicode>, number> as
    Record<RecordKey<Unicode>, Octals>

export {
    smarts,
    bravuraWidths,
}
