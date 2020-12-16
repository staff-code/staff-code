import {Unicode} from "../symbols"
import {Input, UnicodeLiteral} from "../types"

const isUnicodeLiteral = (candidateUnicodeLiteralInputWord: Input): candidateUnicodeLiteralInputWord is UnicodeLiteral =>
    !!candidateUnicodeLiteralInputWord.match(/^u\+/)

const computeUnicodeLiteral = (unicodeWord: Unicode): UnicodeLiteral => {
    let unicodeLiteral = unicodeWord.charCodeAt(0).toString(16)
    while (unicodeLiteral.length < 4) unicodeLiteral = "0" + unicodeLiteral

    return `u+${unicodeLiteral}` as UnicodeLiteral
}

export {
    isUnicodeLiteral,
    computeUnicodeLiteral,
}
