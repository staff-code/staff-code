import {Clause, max} from "@sagittal/general"
import {Octels, Symbol, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"
import {BREAK_UNICODE} from "./constants"
import {isManualAdvanceUnicode, isSmartAdvanceUnicode, isSpacingUnicode} from "./isUnicode"
import {updateSmartStave} from "./updateSmartStave"
import {computeSymbolWidth} from "./width"

const computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStave = (
    symbol: Symbol,
): Unicode & Clause => {
    let smartAdvanceAndSmartStaveUnicodeIntroClause: Unicode & Clause
    const unicode = symbol.unicode
    if (isSmartAdvanceUnicode(unicode)) {
        smartAdvanceAndSmartStaveUnicodeIntroClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (isManualAdvanceUnicode(unicode)) {
        smartAdvanceAndSmartStaveUnicodeIntroClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                symbol.width!,
            )
    } else if (unicode === BREAK_UNICODE) {
        smartAdvanceAndSmartStaveUnicodeIntroClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
        smarts.staveWidth = 0 as Octels
    } else if (isSpacingUnicode(unicode)) {
        smarts.spacing = symbol.width!
        smartAdvanceAndSmartStaveUnicodeIntroClause = EMPTY_UNICODE as Unicode & Clause
    } else {
        updateSmartStave(symbol)

        const maxSymbolWidthSinceLastAdvance = max(smarts.advanceWidth, computeSymbolWidth(symbol))
        smarts.advanceWidth = maxSymbolWidthSinceLastAdvance

        smartAdvanceAndSmartStaveUnicodeIntroClause = EMPTY_UNICODE as Unicode & Clause
    }

    return smartAdvanceAndSmartStaveUnicodeIntroClause
}

export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStave,
}
