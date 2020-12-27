import {Io, Word} from "@sagittal/general"
import {Unicode} from "../codes"
import {UnicodeLiteral} from "../types"

const isUnicodeLiteral = (candidateUnicodeLiteral: Io & Word): candidateUnicodeLiteral is UnicodeLiteral & Word =>
    !!candidateUnicodeLiteral.match(/^u\+/)

const computeUnicodeLiteral = (unicode: Unicode & Word): UnicodeLiteral => {
    let unicodeLiteral = unicode.charCodeAt(0).toString(16)
    while (unicodeLiteral.length < 4) unicodeLiteral = "0" + unicodeLiteral

    return `u+${unicodeLiteral}` as UnicodeLiteral
}

export {
    isUnicodeLiteral,
    computeUnicodeLiteral,
}
