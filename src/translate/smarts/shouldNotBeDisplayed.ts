import {Word} from "@sagittal/general"
import {Unicode} from "../codes"
import {isManualAdvanceUnicode, isSmartAdvanceUnicode, isSmartStaveUnicode, isSpacingUnicode} from "./advanceAndStave"
import {isPositionUnicode} from "./positionAndClef"

const shouldNotBeDisplayed = (unicode: Unicode & Word): boolean =>
    isPositionUnicode(unicode)
    || isSmartStaveUnicode(unicode)
    || isSmartAdvanceUnicode(unicode)
    || isManualAdvanceUnicode(unicode)
    || isSpacingUnicode(unicode)

export {
    shouldNotBeDisplayed,
}
