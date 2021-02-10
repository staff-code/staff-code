import {Clause, Unicode, Word} from "@sagittal/general"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {updateSmartAdvance} from "./advance"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrNewline} from "./advanceOrNewline"
import {computeAdvanceToEndIntroClauseAndUpdateSmarts} from "./advanceToEnd"
import {isManualAdvanceUnicode} from "./isUnicode"
import {computeManualAdvanceWidth} from "./manualAdvance"
import {
    LINES_1_STAVE_UNICODES,
    LINES_2_STAVE_UNICODES,
    LINES_3_STAVE_UNICODES,
    LINES_4_STAVE_UNICODES,
    LINES_5_STAVE_UNICODES,
    LINES_6_STAVE_UNICODES,
    LUTE_STAVE_UNICODES,
    PLAINCHANT_STAVE_UNICODES,
} from "./stave"
import {SmartStave} from "./types"

const computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts = (
    unicode: Unicode & Word,
): Unicode & Clause => {
    let smartAdvanceAndSmartStaveUnicodeIntroClause: Unicode & Clause = EMPTY_UNICODE as Unicode & Clause

    if (isManualAdvanceUnicode(unicode)) {
        const manualAdvanceWidth = computeManualAdvanceWidth(unicode)
        smartAdvanceAndSmartStaveUnicodeIntroClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrNewline(
                manualAdvanceWidth,
                {manual: true},
            )
    } else if (smarts.staveOn && LINES_1_STAVE_UNICODES.includes(unicode)) {
        smarts.stave = SmartStave.LINES_1
    } else if (smarts.staveOn && LINES_2_STAVE_UNICODES.includes(unicode)) {
        smarts.stave = SmartStave.LINES_2
    } else if (smarts.staveOn && LINES_3_STAVE_UNICODES.includes(unicode)) {
        smarts.stave = SmartStave.LINES_3
    } else if (smarts.staveOn && LINES_4_STAVE_UNICODES.includes(unicode)) {
        smarts.stave = SmartStave.LINES_4
    } else if (smarts.staveOn && LINES_5_STAVE_UNICODES.includes(unicode)) {
        smarts.stave = SmartStave.LINES_5
    } else if (smarts.staveOn && LINES_6_STAVE_UNICODES.includes(unicode)) {
        smarts.stave = SmartStave.LINES_6
    } else if (smarts.staveOn && LUTE_STAVE_UNICODES.includes(unicode)) {
        smarts.stave = SmartStave.LUTE
    } else if (smarts.staveOn && PLAINCHANT_STAVE_UNICODES.includes(unicode)) {
        smarts.stave = SmartStave.PLAINCHANT
    } else if (smarts.staveOn && smarts.advanceToEnd) {
        smartAdvanceAndSmartStaveUnicodeIntroClause =
            computeAdvanceToEndIntroClauseAndUpdateSmarts(unicode)
    } else if (smarts.advanceToEnd) {
        smarts.advanceToEnd = false
        updateSmartAdvance(unicode)
    } else {
        updateSmartAdvance(unicode)
    }

    return smartAdvanceAndSmartStaveUnicodeIntroClause
}

export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts,
}
