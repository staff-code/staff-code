import {Word} from "@sagittal/general"
import {CaseDesensitized, Code, NOT_SMuFL_SMART_SPACING_COMMAND_MAP, Octals} from "../../codes"

const SPACING_CODES = Object.keys(NOT_SMuFL_SMART_SPACING_COMMAND_MAP)

const isSpacingCode = (caseDesensitizedCode: Code & CaseDesensitized & Word): boolean =>
    SPACING_CODES.includes(caseDesensitizedCode)

const computeSpacing = (caseDesensitizedCode: Code & CaseDesensitized & Word): Octals =>
    SPACING_CODES.indexOf(caseDesensitizedCode) as Octals

export {
    computeSpacing,
    isSpacingCode,
}
