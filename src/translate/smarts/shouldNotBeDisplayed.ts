import {Unicode} from "../symbols"
import {isManualAdvanceUnicode, isSmartAdvanceUnicode, isSmartStaveUnicode} from "./advanceAndStave"
import {isPositionUnicode} from "./positionAndClef"

const shouldNotBeDisplayed = (unicodeWord: Unicode): boolean =>
    isPositionUnicode(unicodeWord)
    || isSmartStaveUnicode(unicodeWord)
    || isSmartAdvanceUnicode(unicodeWord)
    || isManualAdvanceUnicode(unicodeWord)

export {
    shouldNotBeDisplayed,
}
