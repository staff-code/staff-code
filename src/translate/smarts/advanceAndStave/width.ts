import {add, isUndefined, Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {bravuraWidths, smarts} from "../globals"
import {shouldNotBeDisplayed} from "../shouldNotBeDisplayed"

const computeUnicodeWidth = (unicode: Unicode & Word): Octals => {
    const bravuraWidth = bravuraWidths[unicode]
    const width = isUndefined(bravuraWidth) ? 0 as Octals : bravuraWidth

    return shouldNotBeDisplayed(unicode) ? width : add(width, smarts.spacing)
}

export {
    computeUnicodeWidth,
}
