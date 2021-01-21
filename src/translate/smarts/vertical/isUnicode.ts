import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {POSITION_UNICODES} from "./constants"

const isPositionUnicode = (unicode: Unicode & Word): boolean =>
    POSITION_UNICODES.includes(unicode)

export {
    isPositionUnicode,
}
