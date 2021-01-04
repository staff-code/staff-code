import {isUndefined, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {Position, POSITION_UNICODES} from "../positionAndClef"
import {MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE} from "./constants"
import {takesLegerLine} from "./takes"

const computeStaffPosition = (): Position =>
    smarts.positionUnicode === EMPTY_UNICODE ?
        0 as Position :
        MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE - POSITION_UNICODES.indexOf(smarts.positionUnicode) as Position

const aboveOrBelowStave = (positionArgument?: Position): boolean => {
    const position = isUndefined(positionArgument) ? computeStaffPosition() : positionArgument

    return position > 5 || position < -5
}

const needsLegerLine = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && takesLegerLine(unicode) && aboveOrBelowStave()

export {
    needsLegerLine,
    aboveOrBelowStave,
    computeStaffPosition,
}
