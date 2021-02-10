import {add, Clause, subtract, sumTexts, Unicode, Word} from "@sagittal/general"
import {smarts} from "../globals"
import {updateSmartAdvance} from "./advance"
import {MEDIUM_STAVE_UNICODES, NARROW_STAVE_UNICODES, WIDE_STAVE_UNICODES} from "./advanceOrNewline"
import {MEDIUM_STAVE_WIDTH, NARROW_STAVE_WIDTH, WIDE_STAVE_WIDTH} from "./constants"
import {Octals} from "./types"
import {computeAdvanceUnicode} from "./unicode"
import {computeUnicodeWidth} from "./width"

const computeAdvanceToEndIntroClause = (width: Octals): Unicode & Clause => {
    let advanceToEndIntroClause: Unicode & Clause

    if (width > smarts.staveWidth && width > MEDIUM_STAVE_WIDTH) {
        advanceToEndIntroClause = sumTexts(
            computeAdvanceUnicode(smarts.staveWidth),
            WIDE_STAVE_UNICODES[smarts.stave] as Unicode as Unicode & Clause,
            computeAdvanceUnicode(subtract(WIDE_STAVE_WIDTH, width)),
        ) as Unicode & Clause
    } else if (width > smarts.staveWidth && width > NARROW_STAVE_WIDTH) {
        advanceToEndIntroClause = sumTexts(
            computeAdvanceUnicode(smarts.staveWidth),
            MEDIUM_STAVE_UNICODES[smarts.stave] as Unicode as Unicode & Clause,
            computeAdvanceUnicode(subtract(MEDIUM_STAVE_WIDTH, width)),
        ) as Unicode & Clause
    } else if (width > smarts.staveWidth) {
        advanceToEndIntroClause = sumTexts(
            computeAdvanceUnicode(smarts.staveWidth),
            NARROW_STAVE_UNICODES[smarts.stave] as Unicode as Unicode & Clause,
            computeAdvanceUnicode(subtract(NARROW_STAVE_WIDTH, width)),
        ) as Unicode & Clause
    } else {
        advanceToEndIntroClause = sumTexts(
            computeAdvanceUnicode(subtract(smarts.staveWidth, width)),
        )
    }

    return advanceToEndIntroClause
}

const computeWidthToAdvanceToEnd = (unicode: Unicode & Word): Octals => {
    const widthWithoutSpacing = computeUnicodeWidth(unicode, {spacing: false})
    let widthWithoutManualAdvance = subtract(widthWithoutSpacing, smarts.manualAdvance)

    while (widthWithoutManualAdvance < 0) {
        widthWithoutManualAdvance = add(NARROW_STAVE_WIDTH, widthWithoutManualAdvance)
    }

    return widthWithoutManualAdvance
}

const computeAdvanceToEndIntroClauseAndUpdateSmarts = (unicode: Unicode & Word): Unicode & Clause => {
    const width = computeWidthToAdvanceToEnd(unicode)
    const advanceToEndIntroClause = computeAdvanceToEndIntroClause(width)

    smarts.staveWidth = width
    smarts.advanceToEnd = false
    updateSmartAdvance(unicode)

    return advanceToEndIntroClause
}

export {
    computeAdvanceToEndIntroClauseAndUpdateSmarts,
}
