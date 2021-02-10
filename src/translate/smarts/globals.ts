import {RecordKey, Unicode} from "@sagittal/general"
import {EighthOctals} from "../../../bin"
import {INITIAL_SMARTS} from "./constants"
import {bravuraEighthOctalWidthsJson} from "./horizontal"
import {Smarts} from "./types"

const smarts: Smarts = JSON.parse(JSON.stringify(INITIAL_SMARTS))

const bravuraEighthOctalWidths: Record<RecordKey<Unicode>, EighthOctals> =
    bravuraEighthOctalWidthsJson as Record<RecordKey<Unicode>, number> as Record<RecordKey<Unicode>, EighthOctals>

export {
    smarts,
    bravuraEighthOctalWidths,
}
