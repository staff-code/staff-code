import {isNegative, Word} from "@sagittal/general"
import {CaseDesensitized, Code, Unicode} from "../../codes"
import {smarts} from "../globals"
import {CONDITIONAL_ALIAS_ENHANCED_CASE_DESENSITIZED_CODE_MAP} from "./constants"
import {computeStaffPosition} from "./position"
import {StemZone} from "./types"

const getUnicodeGivenClefAndPosition = (caseDesensitizedCode: Code & CaseDesensitized & Word): Unicode & Word => {
    const stemZone = isNegative(computeStaffPosition()) ?
        StemZone.BELOW_MIDDLE_POSITION :
        StemZone.MIDDLE_POSITION_AND_ABOVE

    return CONDITIONAL_ALIAS_ENHANCED_CASE_DESENSITIZED_CODE_MAP[smarts.clef][stemZone][caseDesensitizedCode]
}

export {
    getUnicodeGivenClefAndPosition,
}
