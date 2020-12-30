import {Io, Word} from "@sagittal/general"
import {Unicode, UnicodeLiteral} from "./types"

const UNICODE_LITERAL_MATCHER = /^\\?[uU]\+?([\da-fA-F]{4})/

const isUnicodeLiteral = (candidateUnicodeLiteral: Io & Word): candidateUnicodeLiteral is UnicodeLiteral & Word =>
    !!candidateUnicodeLiteral.match(UNICODE_LITERAL_MATCHER)

const computeUnicodeLiteral = (unicode: Unicode & Word): UnicodeLiteral => {
    let unicodeLiteral = unicode.charCodeAt(0).toString(16).toUpperCase()
    while (unicodeLiteral.length < 4) unicodeLiteral = "0" + unicodeLiteral

    return `U+${unicodeLiteral}` as UnicodeLiteral
}

const computeUnicodeFromUnicodeLiteral = (input: Io & Word): Unicode & Word =>
    String.fromCharCode(parseInt(input.replace(UNICODE_LITERAL_MATCHER, "0x$1"))) as Unicode & Word

export {
    isUnicodeLiteral,
    computeUnicodeLiteral,
    computeUnicodeFromUnicodeLiteral,
}
