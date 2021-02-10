import {Name, RecordKey, Unicode} from "@sagittal/general"

const EXCLUDED_CODES: Record<RecordKey<Name<Unicode>>, boolean> = {
    "acsgun1": true,
    "acsgun2": true,
    "acsgun3": true,
    "acsgun4": true,
}

export {
    EXCLUDED_CODES,
}
