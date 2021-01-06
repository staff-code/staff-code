import {Clause, Io, Word} from "@sagittal/general"
import {COMMAND_MAP, LowercasedCode, Octals, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"
import {computeEndOfLineUnicodeClauseAndUpdateSmarts} from "./endOfLine"
import {computeSpacing, isSpacingCode} from "./spacing"

const COMMAND_CODES = Object.keys(COMMAND_MAP)

const isCommandCode = (input: Io & Word): boolean => {
    const lowercasedCode: LowercasedCode & Word = input.toLowerCase() as LowercasedCode & Word

    return COMMAND_CODES.includes(lowercasedCode)
}

const computeCommandUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    let commandUnicodeClause: Unicode & Clause = EMPTY_UNICODE as Unicode & Clause

    const lowercasedCode: LowercasedCode & Word = input.toLowerCase() as LowercasedCode & Word

    if (lowercasedCode === ";") {
        commandUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (lowercasedCode === "en;") {
        smarts.advanceToEnd = true
        commandUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (lowercasedCode === "ston") {
        smarts.staveOn = true
    } else if (lowercasedCode === "stof") {
        commandUnicodeClause = computeEndOfLineUnicodeClauseAndUpdateSmarts()
        smarts.staveOn = false
    } else if (isSpacingCode(lowercasedCode)) {
        smarts.spacing = computeSpacing(lowercasedCode)
    }

    return commandUnicodeClause
}

export {
    computeCommandUnicodeClauseAndUpdateSmarts,
    isCommandCode,
}
