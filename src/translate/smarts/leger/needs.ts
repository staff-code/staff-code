import {isUndefined, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeSmartPosition, Position} from "../positionAndClef"
import {takesLegerLine} from "./takes"

const aboveOrBelowStave = (positionArgument?: Position): boolean => {
    const position = isUndefined(positionArgument) ? computeSmartPosition() : positionArgument

    return position > 5 || position < -5
}

const needsLegerLine = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && takesLegerLine(unicode) && aboveOrBelowStave()

export {
    needsLegerLine,
    aboveOrBelowStave,
}
