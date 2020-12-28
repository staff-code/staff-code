import {RecordKey} from "@sagittal/general"
import {Octels, Unicode} from "../codes"
import {computeBravuraWidths} from "./bravuraWidths"
import {INITIAL_SMARTS} from "./constants"
import {Smarts} from "./types"

const smarts: Smarts = JSON.parse(JSON.stringify(INITIAL_SMARTS))

const bravuraWidths: Record<RecordKey<Unicode>, Octels> = computeBravuraWidths()

export {
    smarts,
    bravuraWidths,
}
