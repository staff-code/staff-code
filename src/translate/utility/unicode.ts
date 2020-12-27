import {isUndefined, Word} from "@sagittal/general"
import {Code, CODE_MAP, Symbol, Unicode} from "../codes"

const computeUnicodeForCode = (code: Code & Word): Unicode & Word => {
    const symbol = CODE_MAP[code]

    if (isUndefined(symbol)) throw new Error(`Symbol not found for code ${code}`)

    return symbol.unicode
}

const computeMapUnicodes = (map: Record<Code & Word, Symbol>): Array<Unicode & Word> =>
    (Object.values(map) as Symbol[]).map(({unicode}: Symbol): Unicode & Word => unicode)

export {
    computeUnicodeForCode,
    computeMapUnicodes,
}
