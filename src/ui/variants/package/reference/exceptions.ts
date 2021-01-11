import {Name, RecordKey} from "@sagittal/general"
import {Unicode} from "../../../../translate"

const EXCLUDED_GLYPH_NAMES: Record<RecordKey<Name<Unicode>>, boolean> = {
    "accSagittalUnused1": true,
    "accSagittalUnused2": true,
    "accSagittalUnused3": true,
    "accSagittalUnused4": true,
}

export {
    EXCLUDED_GLYPH_NAMES,
}
