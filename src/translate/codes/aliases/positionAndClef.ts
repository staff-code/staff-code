import {RecordKey, Word} from "@sagittal/general"
import {NOT_SMuFL_MAP} from "../notSmufl"
import {SMuFL_MAP} from "../smufl"
import {Code, Unicode} from "../types"

const CLEF_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "8va": SMuFL_MAP["otal"],
    "8vb": SMuFL_MAP["otbsvb"],
} as Record<Code & Word, Unicode & Word>

const GENERIC_POSITION_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "up15": NOT_SMuFL_MAP["stpsrs15"],
    "up14": NOT_SMuFL_MAP["stpsrs14"],
    "up13": NOT_SMuFL_MAP["stpsrs13"],
    "up12": NOT_SMuFL_MAP["stpsrs12"],
    "up11": NOT_SMuFL_MAP["stpsrs11"],
    "up10": NOT_SMuFL_MAP["stpsrs10"],
    "up9": NOT_SMuFL_MAP["stpsrs9"],
    "up8": SMuFL_MAP["stpsrs8"],
    "up7": SMuFL_MAP["stpsrs7"],
    "up6": SMuFL_MAP["stpsrs6"],
    "up5": SMuFL_MAP["stpsrs5"],
    "up4": SMuFL_MAP["stpsrs4"],
    "up3": SMuFL_MAP["stpsrs3"],
    "up2": SMuFL_MAP["stpsrs2"],
    "up1": SMuFL_MAP["stpsrs1"],
    "up0": NOT_SMuFL_MAP["stpsrs0"],
    "dn1": SMuFL_MAP["stpslr1"],
    "dn2": SMuFL_MAP["stpslr2"],
    "dn3": SMuFL_MAP["stpslr3"],
    "dn4": SMuFL_MAP["stpslr4"],
    "dn5": SMuFL_MAP["stpslr5"],
    "dn6": SMuFL_MAP["stpslr6"],
    "dn7": SMuFL_MAP["stpslr7"],
    "dn8": SMuFL_MAP["stpslr8"],
    "dn9": NOT_SMuFL_MAP["stpslr9"],
    "dn10": NOT_SMuFL_MAP["stpslr10"],
    "dn11": NOT_SMuFL_MAP["stpslr11"],
    "dn12": NOT_SMuFL_MAP["stpslr12"],
    "dn13": NOT_SMuFL_MAP["stpslr13"],
    "dn14": NOT_SMuFL_MAP["stpslr14"],
    "dn15": NOT_SMuFL_MAP["stpslr15"],
} as Record<Code & Word, Unicode & Word>

export {
    CLEF_ALIASES_MAP,
    GENERIC_POSITION_ALIASES_MAP,
}
