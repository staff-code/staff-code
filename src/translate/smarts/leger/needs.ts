import {isUndefined, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeSmartPitchOrSmartPositionPosition, Position} from "../vertical"
import {takesLegerLine} from "./takes"

const aboveOrBelowStave = (positionArgument?: Position): boolean => {
    const position = isUndefined(positionArgument) ? computeSmartPitchOrSmartPositionPosition() : positionArgument

    return position > 5 || position < -5
}

const needsLegerLine = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && takesLegerLine(unicode) && aboveOrBelowStave()

export {
    needsLegerLine,
    aboveOrBelowStave,
}
