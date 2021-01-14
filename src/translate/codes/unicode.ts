import {isUndefined, Word} from "@sagittal/general"
import {caseDesensitize} from "../case"
import {CASE_DESENSITIZED_CODE_MAP} from "./codes"
import {Code, Unicode} from "./types"

const computeUnicodeForCode = (code: Code & Word): Unicode & Word => {
    const caseDesensitizedCode = caseDesensitize(code)
    const unicode = CASE_DESENSITIZED_CODE_MAP[caseDesensitizedCode]

    if (isUndefined(unicode)) throw new Error(`Unicode not found for code ${code}`)

    return unicode
}

export {
    computeUnicodeForCode,
}
