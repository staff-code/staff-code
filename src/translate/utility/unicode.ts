import {isUndefined} from "@sagittal/general"
import {Codeword, CODEWORD_MAP, Symbol, Unicode} from "../codes"

const computeUnicodeForCode = (codeword: Codeword): Unicode => {
    const symbol = CODEWORD_MAP[codeword]

    if (isUndefined(symbol)) throw new Error(`Symbol not found for codeword ${codeword}`)

    return symbol.unicode
}

const computeMapUnicodes = (map: Record<Codeword, Symbol>): Unicode[] =>
    (Object.values(map) as Symbol[]).map(({unicode}: Symbol): Unicode => unicode)

export {
    computeUnicodeForCode,
    computeMapUnicodes,
}
