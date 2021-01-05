import {max, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeUnicodeWidth} from "./width"

const updateSmartAdvance = (unicode: Unicode & Word, {spacing = true}: {spacing?: boolean} = {}): void => {
    const width = computeUnicodeWidth(unicode, {spacing})

    smarts.advanceWidth = max(smarts.advanceWidth, width)
}

export {
    updateSmartAdvance,
}
