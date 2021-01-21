import {Io, isUndefined, Word} from "@sagittal/general"
import {caseDesensitize} from "./case"
import {Code, computeUnicodeFromUnicodeLiteral, isUnicodeLiteral, Unicode} from "./codes"
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

const computeUnrecognizedUnicode = (input: Io & Word): Unicode & Word =>
    `${input} ` as Unicode & Word // The space is important to separate multiple unrecognized codes in a row.

const getUnicode = (input: Io & Word): Unicode & Word => {
    const caseDesensitizedCode = caseDesensitize(input as Code & Word)
    const unicode = getUnicodeGivenClefAndPosition(caseDesensitizedCode)

    if (!isUndefined(unicode)) return unicode

    if (isUnicodeLiteral(input)) return computeUnicodeFromUnicodeLiteral(input)

    // Fall back to user input.
    return computeUnrecognizedUnicode(input)
}

export {
    shouldNotBeDisplayed,
    computeMaybeNotDisplayedUnicode,
    getUnicode,
}
