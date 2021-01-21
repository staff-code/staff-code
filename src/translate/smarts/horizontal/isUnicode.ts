import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {MANUAL_ADVANCE_UNICODES} from "./constants"

const isManualAdvanceUnicode = (unicode: Unicode & Word): boolean =>
    MANUAL_ADVANCE_UNICODES.includes(unicode)

const isManualStaffUnicode = (unicode: Unicode & Word): boolean =>
    (unicode >= "\uE010" && unicode <= "\uE021")    // Staves, 1 line thru 6 line
    || (unicode >= "\uE8F0" && unicode <= "\uE8F2") // Plainchant staff
    || (unicode >= "\uEBA0" && unicode <= "\uEBA2") // Lute tablature staff, 6 courses

export {
    isManualAdvanceUnicode,
    isManualStaffUnicode,
}
