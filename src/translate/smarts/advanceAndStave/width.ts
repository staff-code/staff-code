import {add, isUndefined, Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {isNonSymbolUnicode} from "../../unicode"
import {bravuraWidths, smarts} from "../globals"
import {isNonsymbolifiedStaffUnicode} from "../positionAndClef"

const shouldNotBeSpaced = (unicode: Unicode & Word): boolean =>
    isNonSymbolUnicode(unicode)
    || isNonsymbolifiedStaffUnicode(unicode)

const computeUnicodeWidth = (unicode: Unicode & Word): Octals => {
    const bravuraWidth = bravuraWidths[unicode]
    const width = isUndefined(bravuraWidth) ? 0 as Octals : bravuraWidth

    return shouldNotBeSpaced(unicode) ? width : add(width, smarts.spacing)
}

export {
    computeUnicodeWidth,
}
