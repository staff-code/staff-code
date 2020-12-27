import {RecordKey, Word} from "@sagittal/general"
import {Code, Symbol} from "../types"

const NOT_SMuFL_ZERO_POSITION_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    /*U+E410*/"stpsrs0": {unicode: "", width: 0},
} as Record<Code & Word, Symbol>

// TODO: FEATURE IMPROVE, READY TO GO: IMPLEMENT SUPPLEMENTAL POSITIONS
const NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    /*U+E411*/"stpsrs9": {unicode: ""},
    /*U+E412*/"stpsrs10": {unicode: ""},
    /*U+E413*/"stpsrs11": {unicode: ""},
    /*U+E414*/"stpsrs12": {unicode: ""},
    /*U+E415*/"stpsrs13": {unicode: ""},
    /*U+E416*/"stpsrs14": {unicode: ""},
    /*U+E417*/"stpsrs15": {unicode: ""},
    /*U+E418*/"stpslw9": {unicode: ""},
    /*U+E419*/"stpslw10": {unicode: ""},
    /*U+E41A*/"stpslw11": {unicode: ""},
    /*U+E41B*/"stpslw12": {unicode: ""},
    /*U+E41C*/"stpslw13": {unicode: ""},
    /*U+E41D*/"stpslw14": {unicode: ""},
    /*U+E41E*/"stpslw15": {unicode: ""},
} as Record<Code & Word, Symbol>

export {
    NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
}
