import {Word} from "@sagittal/general"
import {computeCaseDesensitizedCodes} from "../../case"
import {CaseDesensitized, Code, NOT_SMuFL_PITCH_COMMAND_MAP} from "../../codes"

const CASE_DESENSITIZED_NOT_SMuFL_PITCH_COMMAND_CODES = computeCaseDesensitizedCodes(NOT_SMuFL_PITCH_COMMAND_MAP)

const isPitchCommandCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): boolean =>
    CASE_DESENSITIZED_NOT_SMuFL_PITCH_COMMAND_CODES.includes(caseDesensitizedCode)

export {
    isPitchCommandCode,
}
