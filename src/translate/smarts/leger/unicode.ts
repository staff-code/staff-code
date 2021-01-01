import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {Position, POSITION_UNICODES} from "../positionAndClef"
import {
    MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE,
    MEDIUM_LEGER_LINE_UNICODE,
    NARROW_LEGER_LINE_UNICODE,
    WIDE_LEGER_LINE_UNICODE,
} from "./constants"
import {AutoLeger} from "./types"

const LEGER_LINE_UNICODES: Record<AutoLeger, Unicode & Word> = {
    [AutoLeger.NARROW]: NARROW_LEGER_LINE_UNICODE,
    [AutoLeger.MEDIUM]: MEDIUM_LEGER_LINE_UNICODE,
    [AutoLeger.WIDE]: WIDE_LEGER_LINE_UNICODE,
}

const computePositionUnicode = (position: Position): Unicode & Word =>
    POSITION_UNICODES[MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE - position]

const computeLegerUnicode = (): Unicode & Word => {
    return LEGER_LINE_UNICODES[smarts.leger]
}

export {
    computeLegerUnicode,
    computePositionUnicode,
}
