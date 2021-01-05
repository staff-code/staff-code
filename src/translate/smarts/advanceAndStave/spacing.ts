import {Word} from "@sagittal/general"
import {LowercasedCode, NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP, Octals} from "../../codes"

const SPACING_CODES = Object.keys(NOT_SMuFL_SMART_SPACING_NONSYMBOL_MAP)

const isSpacingCode = (lowercasedCode: LowercasedCode & Word): boolean =>
    SPACING_CODES.includes(lowercasedCode)

const computeSpacing = (lowercasedCode: LowercasedCode & Word): Octals =>
    SPACING_CODES.indexOf(lowercasedCode) as Octals

export {
    computeSpacing,
    isSpacingCode,
}
