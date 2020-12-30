import {Io, isUndefined, Word} from "@sagittal/general"
import {computeUnicodeFromUnicodeLiteral, isUnicodeLiteral, LowercasedCode, Unicode} from "./codes"
import {EMPTY_UNICODE} from "./constants"
import {getUnicodeGivenClef, shouldNotBeDisplayed} from "./smarts"

const computeMaybeNotDisplayedUnicode = (unicode: Unicode & Word): Unicode & Word =>
    shouldNotBeDisplayed(unicode) ?
        EMPTY_UNICODE as Unicode & Word :
        unicode

const computeUnicodeAsFallbackToInput = (input: Io & Word): Unicode & Word =>
    `${input} ` as Unicode & Word // The space is important to separate multiple fallen back words in a row.

const getUnicode = (input: Io & Word): Unicode & Word => {
    const lowercasedCode: LowercasedCode & Word = input.toLowerCase() as LowercasedCode & Word
    const unicode = getUnicodeGivenClef(lowercasedCode)

    if (!isUndefined(unicode)) return unicode

    if (isUnicodeLiteral(input)) return computeUnicodeFromUnicodeLiteral(input)

    return computeUnicodeAsFallbackToInput(input)
}

export {
    computeMaybeNotDisplayedUnicode,
    getUnicode,
}
