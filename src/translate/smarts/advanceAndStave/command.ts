import {Clause, Io, subtract, sumTexts, Word} from "@sagittal/general"
import {LowercasedCode, COMMAND_MAP, Octals, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"
import {computeSpacing, isSpacingCode} from "./spacing"
import {computeAdvanceUnicode} from "./unicode"

const COMMAND_CODES = Object.keys(COMMAND_MAP)

const isCommandCode = (input: Io & Word): boolean => {
    const lowercasedCode: LowercasedCode & Word = input.toLowerCase() as LowercasedCode & Word

    return COMMAND_CODES.includes(lowercasedCode)
}

const computeEndOfLineWidth = (): Octals => {
    const unspacedAdvance = subtract(smarts.advanceWidth, smarts.spacing)

    return unspacedAdvance < 0 ? 0 as Octals : unspacedAdvance
}

const computeCommandUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    let commandUnicodeClause: Unicode & Clause = EMPTY_UNICODE as Unicode & Clause

    const lowercasedCode: LowercasedCode & Word = input.toLowerCase() as LowercasedCode & Word

    if (lowercasedCode === ";") {
        commandUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (lowercasedCode === ";;") {
        commandUnicodeClause = sumTexts(
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                computeEndOfLineWidth(),
            ),
            computeAdvanceUnicode(smarts.staveWidth),
        )
    } else if (lowercasedCode === "en;") {
        smarts.advanceToEnd = true
    } else if (lowercasedCode === "ston") {
        smarts.staveOn = true
    } else if (lowercasedCode === "stof") {
        smarts.staveWidth = 0 as Octals
        smarts.staveOn = false
    } else if (isSpacingCode(lowercasedCode)) {
        smarts.spacing = computeSpacing(lowercasedCode)
    }

    return commandUnicodeClause
}

export {
    computeCommandUnicodeClauseAndUpdateSmarts,
    isCommandCode,
    computeEndOfLineWidth,
}
