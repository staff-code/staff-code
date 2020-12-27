import {isUndefined, Word} from "@sagittal/general"
import {Code, LowercasedCode, LOWERCASED_CODE_MAP, Symbol, Unicode} from "../codes"

const computeUnicodeForCode = (code: Code & Word): Unicode & Word => {
    const lowercasedCode = code.toLowerCase() as LowercasedCode
    const symbol = LOWERCASED_CODE_MAP[lowercasedCode]

    if (isUndefined(symbol)) throw new Error(`Symbol not found for code ${code}`)

    return symbol.unicode
}

const computeMapUnicodes = (map: Record<Code & Word, Symbol>): Array<Unicode & Word> =>
    (Object.values(map) as Symbol[]).map(({unicode}: Symbol): Unicode & Word => unicode)

export {
    computeUnicodeForCode,
    computeMapUnicodes,
}
