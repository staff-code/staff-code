import {Unicode} from "../codes"
import {isManualAdvanceUnicode, isSmartAdvanceUnicode, isSmartStaveUnicode, isSpacingUnicode} from "./advanceAndStave"
import {isPositionUnicode} from "./positionAndClef"

const shouldNotBeDisplayed = (unicodeWord: Unicode): boolean =>
    isPositionUnicode(unicodeWord)
    || isSmartStaveUnicode(unicodeWord)
    || isSmartAdvanceUnicode(unicodeWord)
    || isManualAdvanceUnicode(unicodeWord)
    || isSpacingUnicode(unicodeWord)

export {
    shouldNotBeDisplayed,
}
