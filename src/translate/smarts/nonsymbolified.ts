import {Word} from "@sagittal/general"
import {Unicode} from "../codes"
import {isManualStaffUnicode} from "./advanceAndStave"
import {smarts} from "./globals"
import {isManualLegerLineUnicode} from "./leger"

const isNonsymbolifiedLegerLineUnicode = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && isManualLegerLineUnicode(unicode)

const isNonsymbolifiedStaffUnicode = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && isManualStaffUnicode(unicode)

export {
    isNonsymbolifiedLegerLineUnicode,
    isNonsymbolifiedStaffUnicode,
}
