import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"

const NOT_SMuFL_ZERO_POSITION_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+F3F0*/"stpsrs0": "",
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_POSITIONS_SUPPLEMENT_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+F3F7*/"stpsrs15": "",
    /*U+F3F6*/"stpsrs14": "",
    /*U+F3F5*/"stpsrs13": "",
    /*U+F3F4*/"stpsrs12": "",
    /*U+F3F3*/"stpsrs11": "",
    /*U+F3F2*/"stpsrs10": "",
    /*U+F3F1*/"stpsrs9": "",
    /*U+F3F8*/"stpslr9": "",
    /*U+F3F9*/"stpslr10": "",
    /*U+F3FA*/"stpslr11": "",
    /*U+F3FB*/"stpslr12": "",
    /*U+F3FC*/"stpslr13": "",
    /*U+F3FD*/"stpslr14": "",
    /*U+F3FE*/"stpslr15": "",
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_POSITIONS_SUPPLEMENT_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
}
