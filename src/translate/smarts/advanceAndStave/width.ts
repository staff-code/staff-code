import {add, isUndefined, Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {bravuraWidths, smarts} from "../globals"
import {isNonsymbolifiedStaffUnicode} from "../positionAndClef"

const computeUnicodeWidth = (unicode: Unicode & Word, {spacing = true}: {spacing?: boolean} = {}): Octals => {
    const bravuraWidth = bravuraWidths[unicode]
    const width = isUndefined(bravuraWidth) ? 0 as Octals : bravuraWidth

    return !spacing || isNonsymbolifiedStaffUnicode(unicode) ? width : add(width, smarts.spacing)
}

export {
    computeUnicodeWidth,
}
