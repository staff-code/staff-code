import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {isManualStaffUnicode} from "../advanceAndStave"
import {smarts} from "../globals"

const isCommandifiedStaffUnicode = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && isManualStaffUnicode(unicode)

export {
    isCommandifiedStaffUnicode,
}
