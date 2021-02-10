import {caseDesensitize, Io, isUndefined, isUnicodeLiteral, Word} from "@sagittal/general"
import {Code} from "../../../bin"
import {computeCaseDesensitizedCodes} from "../case"
import {COMMAND_MAP} from "../codes"
import {getUnicodeGivenClefAndPosition} from "./vertical"

const CASE_DESENSITIZED_COMMAND_CODES = computeCaseDesensitizedCodes(COMMAND_MAP)

const isCommandCode = (input: Io & Word): boolean => {
    const caseDesensitizedCode = caseDesensitize(input as Code & Word)

    return CASE_DESENSITIZED_COMMAND_CODES.includes(caseDesensitizedCode)
}

const isUnrecognizedCode = (input: Io & Word): boolean => {
    const caseDesensitizedCode = caseDesensitize(input as Code & Word)
    const unicode = getUnicodeGivenClefAndPosition(caseDesensitizedCode)

    return isUndefined(unicode) && !isUnicodeLiteral(input)
}

export {
    isCommandCode,
    isUnrecognizedCode,
}
