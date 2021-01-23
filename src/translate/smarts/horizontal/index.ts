export {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts} from "./introClause"
export {isManualAdvanceUnicode, isManualStaffUnicode} from "./isUnicode"
export {computeUnicodeWidth} from "./width"
export {computeAdvanceUnicode} from "./unicode"
export {SmartStave} from "./types"
export {collapseAdvances} from "./collapse"
export {computeSmartStaveOffUnicodeClauseAndUpdateSmarts} from "./stave"
export {computeEndOfLineUnicodeClauseAndUpdateSmarts, computeEndOfLineWidth} from "./endOfLine"
export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak,
} from "./advanceOrBreak"
export {computeSpacing, isSpacingCommandCode} from "./spacing"

import bravuraWidthsJson from "./bravuraWidths.json"

export {bravuraWidthsJson}
