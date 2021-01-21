import {Word} from "@sagittal/general"
import {computeCaseDesensitizedCodes} from "../../case"
import {CaseDesensitized, Code, NOT_SMuFL_SMART_SPACING_COMMAND_MAP, Octals} from "../../codes"

const CASE_DESENSITIZED_SPACING_CODES = computeCaseDesensitizedCodes(NOT_SMuFL_SMART_SPACING_COMMAND_MAP)

const isSpacingCommandCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): boolean =>
    CASE_DESENSITIZED_SPACING_CODES.includes(caseDesensitizedCode)

const computeSpacing = (caseDesensitizedCode: Code & CaseDesensitized & Word): Octals =>
    CASE_DESENSITIZED_SPACING_CODES.indexOf(caseDesensitizedCode) as Octals

export {
    computeSpacing,
    isSpacingCommandCode,
}
