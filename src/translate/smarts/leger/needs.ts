import {isUndefined, Unicode, Word} from "@sagittal/general"
import {smarts} from "../globals"
import {Position} from "../vertical"
import {takesLegerLine} from "./takes"

const aboveOrBelowStave = (positionArgument?: Position): boolean => {
    const position = isUndefined(positionArgument) ? smarts.position : positionArgument

    return position > 5 || position < -5
}

const needsLegerLine = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && takesLegerLine(unicode) && aboveOrBelowStave()

export {
    needsLegerLine,
    aboveOrBelowStave,
}
