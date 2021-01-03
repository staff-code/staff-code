import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"

const NOT_SMuFL_ZERO_POSITION_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+E410*/"staffPosRaise0": "",
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+E417*/"staffPosRaise15": "",
    /*U+E416*/"staffPosRaise14": "",
    /*U+E415*/"staffPosRaise13": "",
    /*U+E414*/"staffPosRaise12": "",
    /*U+E413*/"staffPosRaise11": "",
    /*U+E412*/"staffPosRaise10": "",
    /*U+E411*/"staffPosRaise9": "",
    /*U+E418*/"staffPosLower9": "",
    /*U+E419*/"staffPosLower10": "",
    /*U+E41A*/"staffPosLower11": "",
    /*U+E41B*/"staffPosLower12": "",
    /*U+E41C*/"staffPosLower13": "",
    /*U+E41D*/"staffPosLower14": "",
    /*U+E41E*/"staffPosLower15": "",
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
}
