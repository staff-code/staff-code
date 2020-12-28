import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"

const NOT_SMuFL_ZERO_POSITION_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+E410*/"stpsrs0": "",
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+E417*/"stpsrs15": "",
    /*U+E416*/"stpsrs14": "",
    /*U+E415*/"stpsrs13": "",
    /*U+E414*/"stpsrs12": "",
    /*U+E413*/"stpsrs11": "",
    /*U+E412*/"stpsrs10": "",
    /*U+E411*/"stpsrs9": "",
    /*U+E418*/"stpslw9": "",
    /*U+E419*/"stpslw10": "",
    /*U+E41A*/"stpslw11": "",
    /*U+E41B*/"stpslw12": "",
    /*U+E41C*/"stpslw13": "",
    /*U+E41D*/"stpslw14": "",
    /*U+E41E*/"stpslw15": "",
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
}
