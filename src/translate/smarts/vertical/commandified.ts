import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {isManualStaffUnicode} from "../horizontal"

const isCommandifiedStaffUnicode = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && isManualStaffUnicode(unicode)

export {
    isCommandifiedStaffUnicode,
}
