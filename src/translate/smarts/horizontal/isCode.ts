import {Word} from "@sagittal/general"
import {CaseDesensitized, Code} from "../../codes"
import {CASE_DESENSITIZED_SPACING_CODES} from "./constants"

const isSpacingCommandCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): boolean =>
    CASE_DESENSITIZED_SPACING_CODES.includes(caseDesensitizedCode)

export {
    isSpacingCommandCode,
}
