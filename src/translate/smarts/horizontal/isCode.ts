import {CaseDesensitized, Word} from "@sagittal/general"
import {Code} from "../../../../bin"
import {CASE_DESENSITIZED_SPACING_CODES} from "./constants"

const isSpacingCommandCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): boolean =>
    CASE_DESENSITIZED_SPACING_CODES.includes(caseDesensitizedCode)

export {
    isSpacingCommandCode,
}
