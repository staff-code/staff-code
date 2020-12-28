import {RecordKey} from "@sagittal/general"
import {Octels, Unicode} from "../codes"
import {bravuraWidthsJson} from "./advanceAndStave"
import {INITIAL_SMARTS} from "./constants"
import {Smarts} from "./types"

const smarts: Smarts = JSON.parse(JSON.stringify(INITIAL_SMARTS))

const bravuraWidths: Record<RecordKey<Unicode>, Octels> = bravuraWidthsJson as Record<RecordKey<Unicode>, number> as
    Record<RecordKey<Unicode>, Octels>

export {
    smarts,
    bravuraWidths,
}
