import {
    caseDesensitize,
    computeUnicodeFromUnicodeLiteral,
    Io,
    isUndefined,
    isUnicodeLiteral,
    Unicode,
    Word,
} from "@sagittal/general"
import {Code} from "../../bin"
import {EMPTY_UNICODE} from "./constants"
import {
    getUnicodeGivenClefAndPosition,
    isCommandifiedStaffUnicode,
    isManualAdvanceUnicode,
    isPositionUnicode,
} from "./smarts"

const shouldNotBeDisplayed = (unicode: Unicode & Word): boolean =>
    isPositionUnicode(unicode)
    || isManualAdvanceUnicode(unicode)
    || isCommandifiedStaffUnicode(unicode)

const computeMaybeNotDisplayedUnicode = (unicode: Unicode & Word): Unicode & Word =>
    shouldNotBeDisplayed(unicode) ?
        EMPTY_UNICODE as Unicode & Word :
        unicode

const getUnicode = (input: Io & Word): Unicode & Word => {
    const caseDesensitizedCode = caseDesensitize(input as Code & Word)
    const unicode = getUnicodeGivenClefAndPosition(caseDesensitizedCode)

    if (!isUndefined(unicode)) return unicode

    if (isUnicodeLiteral(input)) return computeUnicodeFromUnicodeLiteral(input)

    throw new Error(`Somehow this input code was not recognized as an unrecognized code earlier in the process, despite it using the same conditions here, and so it was not recognized either as either of the recognized types: normal, or a unicode literal, and now we're here, failing: ${input}`)
}

export {
    shouldNotBeDisplayed,
    computeMaybeNotDisplayedUnicode,
    getUnicode,
}
