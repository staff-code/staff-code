import {isUndefined} from "@sagittal/general"
import {Code, CODE_MAP, Symbol, Unicode} from "../codes"

const computeUnicodeForCode = (code: Code): Unicode => {
    const symbol = CODE_MAP[code]

    if (isUndefined(symbol)) throw new Error(`Symbol not found for code ${code}`)

    return symbol.unicode
}

const computeMapUnicodes = (map: Record<Code, Symbol>): Unicode[] =>
    (Object.values(map) as Symbol[]).map(({unicode}: Symbol): Unicode => unicode)

export {
    computeUnicodeForCode,
    computeMapUnicodes,
}
