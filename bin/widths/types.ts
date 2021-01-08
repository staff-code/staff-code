import {Name, RecordKey} from "@sagittal/general"
import {Unicode} from "../../src"

type EighthOctal = number & {_EighthOctalBrand: boolean}

interface BoundingBox {
    bBoxNE: EighthOctal[]
}

interface BravuraMetadata {
    glyphBBoxes: Record<RecordKey<Name<Unicode>>, BoundingBox>
}

export {
    BravuraMetadata,
    BoundingBox,
    EighthOctal,
}
