import {RecordKey, Word} from "@sagittal/general"
import {Code, Symbol} from "../types"

const NOT_SMuFL_ZERO_POSITION_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    /*U+E410*/"stpsrs0": {unicode: "", width: 0},
} as Record<Code & Word, Symbol>

const NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP: Record<RecordKey<Code & Word>, Symbol> = {
    /*U+E417*/"stpsrs15": {unicode: "", width: 0},
    /*U+E416*/"stpsrs14": {unicode: "", width: 0},
    /*U+E415*/"stpsrs13": {unicode: "", width: 0},
    /*U+E414*/"stpsrs12": {unicode: "", width: 0},
    /*U+E413*/"stpsrs11": {unicode: "", width: 0},
    /*U+E412*/"stpsrs10": {unicode: "", width: 0},
    /*U+E411*/"stpsrs9": {unicode: "", width: 0},
    /*U+E418*/"stpslw9": {unicode: "", width: 0},
    /*U+E419*/"stpslw10": {unicode: "", width: 0},
    /*U+E41A*/"stpslw11": {unicode: "", width: 0},
    /*U+E41B*/"stpslw12": {unicode: "", width: 0},
    /*U+E41C*/"stpslw13": {unicode: "", width: 0},
    /*U+E41D*/"stpslw14": {unicode: "", width: 0},
    /*U+E41E*/"stpslw15": {unicode: "", width: 0},
} as Record<Code & Word, Symbol>

export {
    NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
}
