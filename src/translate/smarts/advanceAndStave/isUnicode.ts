import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {MANUAL_ADVANCE_UNICODES, SMART_ADVANCE_UNICODES, SMART_STAVE_UNICODES, SPACING_UNICODES} from "./constants"

const isSmartStaveUnicode = (unicode: Unicode & Word): boolean =>
    SMART_STAVE_UNICODES.includes(unicode)

const isSmartAdvanceUnicode = (unicode: Unicode & Word): boolean =>
    SMART_ADVANCE_UNICODES.includes(unicode)

const isManualAdvanceUnicode = (unicode: Unicode & Word): boolean =>
    MANUAL_ADVANCE_UNICODES.includes(unicode)

const isSpacingUnicode = (unicode: Unicode & Word): boolean =>
    SPACING_UNICODES.includes(unicode)

export {
    isSmartStaveUnicode,
    isManualAdvanceUnicode,
    isSmartAdvanceUnicode,
    isSpacingUnicode,
}
