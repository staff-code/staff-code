import {isUndefined} from "@sagittal/general"
import {Code, CODE_MAP_PLUS_SMART_CODES, Symbol, Unicode} from "../symbols"
import {computeCodewordFromCode} from "./codeword"

const computeUnicodeForCode = (code: Code): Unicode => {
    const symbol = CODE_MAP_PLUS_SMART_CODES[code]

    if (isUndefined(symbol)) throw new Error(`Symbol not found for codeword ${computeCodewordFromCode(code)}`)

    return symbol.unicode
}

const computeMapUnicodes = (map: Record<Code, Symbol>): Unicode[] =>
    Object.values(map).map(({unicode}: Symbol): Unicode => unicode)

export {
    computeUnicodeForCode,
    computeMapUnicodes,
}
