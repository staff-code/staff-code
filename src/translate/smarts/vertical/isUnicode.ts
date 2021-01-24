import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {isManualStaffUnicode} from "../horizontal"
import {POSITION_UNICODES} from "./constants"

const isPositionUnicode = (unicode: Unicode & Word): boolean =>
    POSITION_UNICODES.includes(unicode)

const isCommandifiedStaffUnicode = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && isManualStaffUnicode(unicode)

export {
    isPositionUnicode,
    isCommandifiedStaffUnicode,
}
