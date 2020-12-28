import {isUndefined, Word} from "@sagittal/general"
import {LOWERCASED_CODE_MAP} from "./codes"
import {Code, LowercasedCode, Unicode} from "./types"

const computeUnicodeForCode = (code: Code & Word): Unicode & Word => {
    const lowercasedCode = code.toLowerCase() as LowercasedCode & Word
    const unicode = LOWERCASED_CODE_MAP[lowercasedCode]

    if (isUndefined(unicode)) throw new Error(`Unicode not found for code ${code}`)

    return unicode
}

export {
    computeUnicodeForCode,
}
