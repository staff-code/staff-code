import {Name, RecordKey} from "@sagittal/general"
import {Unicode} from "../../../../translate"

const EXCLUDED_CODES: Record<RecordKey<Name<Unicode>>, boolean> = {
    "acsgun1": true,
    "acsgun2": true,
    "acsgun3": true,
    "acsgun4": true,
}

export {
    EXCLUDED_CODES,
}
