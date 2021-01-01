import {add, isUndefined, Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {isNonSymbolUnicode} from "../../unicode"
import {bravuraWidths, smarts} from "../globals"

const computeUnicodeWidth = (unicode: Unicode & Word): Octals => {
    const bravuraWidth = bravuraWidths[unicode]
    const width = isUndefined(bravuraWidth) ? 0 as Octals : bravuraWidth

    return isNonSymbolUnicode(unicode) ? width : add(width, smarts.spacing)
}

export {
    computeUnicodeWidth,
}

// TODO: FEATURE IMPROVE, BLOCKED: LEGER LINE CENTERING it doesn't look like notes center on the leger lines
