import {Name, RecordKey, Unicode} from "@sagittal/general"

type EighthOctals = number & {_EighthOctalBrand: boolean}

interface BoundingBox {
    bBoxNE: EighthOctals[]
}

interface BravuraMetadata {
    glyphBBoxes: Record<RecordKey<Name<Unicode>>, BoundingBox>
}

export {
    BravuraMetadata,
    BoundingBox,
    EighthOctals,
}
