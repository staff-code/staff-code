export {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts} from "./introClause"
export {isManualAdvanceUnicode, isManualStaffUnicode} from "./isUnicode"
export {computeUnicodeWidth} from "./width"
export {computeAdvanceUnicode} from "./unicode"
export {SmartStave, AltAdvance} from "./types"
export {collapseAdvances} from "./collapse"
export {computeSmartStaveOffUnicodeClauseAndUpdateSmarts} from "./stave"
export {computeSmartAdvanceUnicodeClauseAndUpdateSmarts} from "./smart"
export {computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts, computeAdvanceToEndOfInkWidth} from "./endOfInk"
export {computeSpacing} from "./spacing"
export {isSpacingCommandCode} from "./isCode"

import bravuraWidthsJson from "./bravuraWidths.json"

export {bravuraWidthsJson}
