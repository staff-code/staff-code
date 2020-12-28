import {add, isUndefined, Word} from "@sagittal/general"
import {computeDebugCodeFromUnicode, Octels, Unicode} from "../../codes"
import {bravuraWidths, smarts} from "../globals"

const computeUnicodeWidth = (unicode: Unicode & Word): Octels => {
    const bravuraWidth = bravuraWidths[unicode]
    const width = isUndefined(bravuraWidth) ? 0 as Octels : bravuraWidth

    return add(width, smarts.spacing)
}

export {
    computeUnicodeWidth,
}
