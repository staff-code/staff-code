import {add, isUndefined} from "@sagittal/general"
import {Octels, Symbol} from "../codes"
import {bravuraWidths, smarts} from "./globals"

const computeSymbolWidth = ({unicode}: Symbol): Octels => {
    const bravuraWidth = bravuraWidths[unicode]
    const width = isUndefined(bravuraWidth) ? 0 as Octels : bravuraWidth

    return add(width, smarts.spacing)
}

export {
    computeSymbolWidth,
}
