import {max, Unicode, Word} from "@sagittal/general"
import {smarts} from "../globals"
import {computeUnicodeWidth} from "./width"

const updateSmartAdvance = (unicode: Unicode & Word): void => {
    const width = computeUnicodeWidth(unicode)

    smarts.advanceWidth = max(smarts.advanceWidth, width)
}

export {
    updateSmartAdvance,
}
