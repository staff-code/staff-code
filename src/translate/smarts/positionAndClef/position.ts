import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE, POSITION_UNICODES} from "./constants"
import {isPositionUnicode} from "./isUnicode"
import {Position} from "./types"

const computeStaffPosition = (): Position =>
    smarts.positionUnicode === EMPTY_UNICODE ?
        0 as Position :
        MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE - POSITION_UNICODES.indexOf(smarts.positionUnicode) as Position

const updateSmartPosition = (unicode: Unicode & Word): void => {
    if (isPositionUnicode(unicode)) smarts.positionUnicode = unicode
}

export {
    updateSmartPosition,
    computeStaffPosition,
}
