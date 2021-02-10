import {CaseDesensitized, Word} from "@sagittal/general"
import {Code} from "../../../../bin"
import {computeCaseDesensitizedCodes} from "../../case"
import {NOT_SMuFL_PITCH_COMMAND_MAP} from "../../codes"

const CASE_DESENSITIZED_NOT_SMuFL_PITCH_COMMAND_CODES = computeCaseDesensitizedCodes(NOT_SMuFL_PITCH_COMMAND_MAP)

const isPitchCommandCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): boolean =>
    CASE_DESENSITIZED_NOT_SMuFL_PITCH_COMMAND_CODES.includes(caseDesensitizedCode)

export {
    isPitchCommandCode,
}
