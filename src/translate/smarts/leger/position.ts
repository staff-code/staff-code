import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {Position, POSITION_UNICODES} from "../positionAndClef"
import {MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE} from "./constants"

const computePositionUnicode = (position: Position): Unicode & Word =>
    POSITION_UNICODES[MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE - position]

export {
    computePositionUnicode,
}
