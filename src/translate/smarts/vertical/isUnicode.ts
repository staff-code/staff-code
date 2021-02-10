import {Unicode, Word} from "@sagittal/general"
import {smarts} from "../globals"
import {isManualStaffUnicode} from "../horizontal"
import {POSITION_UNICODES} from "./constants"

const isPositionUnicode = (unicode: Unicode & Word): boolean =>
    POSITION_UNICODES.includes(unicode)

const isCommandifiedStaffUnicode = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && isManualStaffUnicode(unicode)

const isClefUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE050" && unicode <= "\uE07F"

export {
    isPositionUnicode,
    isCommandifiedStaffUnicode,
    isClefUnicode,
}
