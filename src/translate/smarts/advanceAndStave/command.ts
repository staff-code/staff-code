import {Clause, Io, Word} from "@sagittal/general"
import {caseDesensitize} from "../../case"
import {Code, COMMAND_MAP, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {
    computePitchFromCode,
    computePositionFromCode,
    isPitchCommandCode,
    isPositionCommandCode,
    PitchOrPosition,
} from "../positionAndClef"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"
import {computeEndOfLineUnicodeClauseAndUpdateSmarts} from "./endOfLine"
import {computeSpacing, isSpacingCode} from "./spacing"

const COMMAND_CODES = Object.keys(COMMAND_MAP)

const isCommandCode = (input: Io & Word): boolean => {
    const caseDesensitizedCode = caseDesensitize(input as Code & Word)

    return COMMAND_CODES.includes(caseDesensitizedCode)
}

const computeCommandUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    let commandUnicodeClause: Unicode & Clause = EMPTY_UNICODE as Unicode & Clause

    const caseDesensitizedCode = caseDesensitize(input as Code & Word)

    if (caseDesensitizedCode === ";") {
        commandUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (caseDesensitizedCode === "en;") {
        smarts.advanceToEnd = true
        commandUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (caseDesensitizedCode === "ston") {
        smarts.staveOn = true
    } else if (caseDesensitizedCode === "stof") {
        commandUnicodeClause = computeEndOfLineUnicodeClauseAndUpdateSmarts()
        smarts.staveOn = false
    } else if (isSpacingCode(caseDesensitizedCode)) {
        smarts.spacing = computeSpacing(caseDesensitizedCode)
    } else if (isPitchCommandCode(caseDesensitizedCode)) {
        smarts.pitch = computePitchFromCode(caseDesensitizedCode)
        smarts.pitchOrPosition = PitchOrPosition.PITCH
    } else if (isPositionCommandCode(caseDesensitizedCode)) {
        smarts.position = computePositionFromCode(caseDesensitizedCode)
        smarts.pitchOrPosition = PitchOrPosition.POSITION
    }

    // TODO: CLEAN, READY TO GO: COMMAND TYPE
    //  Add an extra type for `& Command` ? for command codes

    // TODO: CLEAN, READY TO GO: SMARTS ORGANIZATION
    //  Should I just rename ubiquitous things with "and" in them to "vertical" and "horizontal"?
    //  A new complication has arisen, a distinction between pitch or position, that should affect module organization

    return commandUnicodeClause
}

export {
    computeCommandUnicodeClauseAndUpdateSmarts,
    isCommandCode,
}
