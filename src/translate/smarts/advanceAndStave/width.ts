import {add, isUndefined, Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {bravuraWidths, smarts} from "../globals"

const computeUnicodeWidth = (unicode: Unicode & Word): Octals => {
    const bravuraWidth = bravuraWidths[unicode]
    const width = isUndefined(bravuraWidth) ? 0 as Octals : bravuraWidth

    return add(width, smarts.spacing)
}

export {
    computeUnicodeWidth,
}
