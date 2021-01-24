import {Io, isUndefined, Word} from "@sagittal/general"
import {caseDesensitize, computeCaseDesensitizedCodes} from "../case"
import {Code, COMMAND_MAP, isUnicodeLiteral} from "../codes"
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
