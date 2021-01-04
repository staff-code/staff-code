import {RecordKey, Word} from "@sagittal/general"
import {NOT_SMuFL_CODES} from "../notSmufl"
import {SMuFL_MAP} from "../smufl"
import {Code, Unicode} from "../types"

const CLEF_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "8va": SMuFL_MAP["ottavaAlta"],
    "8vb": SMuFL_MAP["ottavaBassaVb"],
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_ZERO_POSITION_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+E410*/"stpsrs0": NOT_SMuFL_CODES["staffPosRaise0"],
} as Record<Code & Word, Unicode & Word>

const NOT_SMuFL_SUPPLEMENTAL_POSITION_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    /*U+E417*/"stpsrs15": NOT_SMuFL_CODES["staffPosRaise15"],
    /*U+E416*/"stpsrs14": NOT_SMuFL_CODES["staffPosRaise14"],
    /*U+E415*/"stpsrs13": NOT_SMuFL_CODES["staffPosRaise13"],
    /*U+E414*/"stpsrs12": NOT_SMuFL_CODES["staffPosRaise12"],
    /*U+E413*/"stpsrs11": NOT_SMuFL_CODES["staffPosRaise11"],
    /*U+E412*/"stpsrs10": NOT_SMuFL_CODES["staffPosRaise10"],
    /*U+E411*/"stpsrs9": NOT_SMuFL_CODES["staffPosRaise9"],
    /*U+E418*/"stpslw9": NOT_SMuFL_CODES["staffPosLower9"],
    /*U+E419*/"stpslw10": NOT_SMuFL_CODES["staffPosLower10"],
    /*U+E41A*/"stpslw11": NOT_SMuFL_CODES["staffPosLower11"],
    /*U+E41B*/"stpslw12": NOT_SMuFL_CODES["staffPosLower12"],
    /*U+E41C*/"stpslw13": NOT_SMuFL_CODES["staffPosLower13"],
    /*U+E41D*/"stpslw14": NOT_SMuFL_CODES["staffPosLower14"],
    /*U+E41E*/"stpslw15": NOT_SMuFL_CODES["staffPosLower15"],
} as Record<Code & Word, Unicode & Word>

const GENERIC_POSITION_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "up15": NOT_SMuFL_CODES["staffPosRaise15"],
    "up14": NOT_SMuFL_CODES["staffPosRaise14"],
    "up13": NOT_SMuFL_CODES["staffPosRaise13"],
    "up12": NOT_SMuFL_CODES["staffPosRaise12"],
    "up11": NOT_SMuFL_CODES["staffPosRaise11"],
    "up10": NOT_SMuFL_CODES["staffPosRaise10"],
    "up9": NOT_SMuFL_CODES["staffPosRaise9"],
    "up8": SMuFL_MAP["staffPosRaise8"],
    "up7": SMuFL_MAP["staffPosRaise7"],
    "up6": SMuFL_MAP["staffPosRaise6"],
    "up5": SMuFL_MAP["staffPosRaise5"],
    "up4": SMuFL_MAP["staffPosRaise4"],
    "up3": SMuFL_MAP["staffPosRaise3"],
    "up2": SMuFL_MAP["staffPosRaise2"],
    "up1": SMuFL_MAP["staffPosRaise1"],
    "up0": NOT_SMuFL_CODES["staffPosRaise0"],
    "dn1": SMuFL_MAP["staffPosLower1"],
    "dn2": SMuFL_MAP["staffPosLower2"],
    "dn3": SMuFL_MAP["staffPosLower3"],
    "dn4": SMuFL_MAP["staffPosLower4"],
    "dn5": SMuFL_MAP["staffPosLower5"],
    "dn6": SMuFL_MAP["staffPosLower6"],
    "dn7": SMuFL_MAP["staffPosLower7"],
    "dn8": SMuFL_MAP["staffPosLower8"],
    "dn9": NOT_SMuFL_CODES["staffPosLower9"],
    "dn10": NOT_SMuFL_CODES["staffPosLower10"],
    "dn11": NOT_SMuFL_CODES["staffPosLower11"],
    "dn12": NOT_SMuFL_CODES["staffPosLower12"],
    "dn13": NOT_SMuFL_CODES["staffPosLower13"],
    "dn14": NOT_SMuFL_CODES["staffPosLower14"],
    "dn15": NOT_SMuFL_CODES["staffPosLower15"],
} as Record<Code & Word, Unicode & Word>

export {
    NOT_SMuFL_ZERO_POSITION_ALIASES_MAP,
    NOT_SMuFL_SUPPLEMENTAL_POSITION_ALIASES_MAP,
    CLEF_ALIASES_MAP,
    GENERIC_POSITION_ALIASES_MAP,
}
