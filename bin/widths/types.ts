import {Name, RecordKey} from "@sagittal/general"
// tslint:disable-next-line no-reaching-imports
import {Unicode} from "../../src/translate"

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
