import {Io, isUndefined, Word} from "@sagittal/general"
import {isUnicodeLiteral, LowercasedCode, Unicode} from "./codes"
import {EMPTY_UNICODE} from "./constants"
import {shouldNotBeDisplayed, smarts} from "./smarts"

const computeMaybeNotDisplayedUnicode = (unicode: Unicode & Word): Unicode & Word =>
    shouldNotBeDisplayed(unicode) ?
        EMPTY_UNICODE as Unicode & Word :
        unicode

const computeUnicodeFromUnicodeLiteral = (input: Io & Word): Unicode & Word =>
    String.fromCharCode(parseInt(input.replace(/^U\+(.*)/, "0x$1"))) as Unicode & Word

const computeUnicodeAsFallbackToInput = (input: Io & Word): Unicode & Word =>
    `${input} ` as Unicode & Word // The space is important to separate multiple fallen back words in a row.

const getUnicode = (input: Io & Word): Unicode & Word => {
    const lowercasedCode: LowercasedCode = input.toLowerCase() as LowercasedCode

    // TODO: CLEAN, READY TO GO: UNDO REFACTOR RE: SMARTS DOT LOWERCASED_CODE_MAP VS SMARTS DOT CLEF
    //  The problem with this refactor is that now it's hard to debug the smarts state
    //  Because it's got this huge array on it when all you really want to know is which clef is it set to
    //  - It's also kind of troubling how you export that TREBLE_LOWERCASED_CODE_MAP from smarts/positionAndClef
    //  - And if you're constantly setAllPropertiesOfObjectOnAnother, the INITIAL_SMARTS, that's all of that!
    const unicode = smarts.lowercasedCodeMap[lowercasedCode]

    if (!isUndefined(unicode)) return unicode

    if (isUnicodeLiteral(input)) return computeUnicodeFromUnicodeLiteral(input)

    return computeUnicodeAsFallbackToInput(input)
}

export {
    computeMaybeNotDisplayedUnicode,
    getUnicode,
}
