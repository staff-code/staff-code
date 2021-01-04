import {RecordKey, Word} from "@sagittal/general"
import {Code, Unicode} from "../types"

const NOT_SMuFL_ZERO_POSITION_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+F3F0*/"staffPosRaise0": "",
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+F3F7*/"staffPosRaise15": "",
    /*U+F3F6*/"staffPosRaise14": "",
    /*U+F3F5*/"staffPosRaise13": "",
    /*U+F3F4*/"staffPosRaise12": "",
    /*U+F3F3*/"staffPosRaise11": "",
    /*U+F3F2*/"staffPosRaise10": "",
    /*U+F3F1*/"staffPosRaise9": "",
    /*U+F3F8*/"staffPosLower9": "",
    /*U+F3F9*/"staffPosLower10": "",
    /*U+F3FA*/"staffPosLower11": "",
    /*U+F3FB*/"staffPosLower12": "",
    /*U+F3FC*/"staffPosLower13": "",
    /*U+F3FD*/"staffPosLower14": "",
    /*U+F3FE*/"staffPosLower15": "",
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_SUPPLEMENTAL_POSITION_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
}
