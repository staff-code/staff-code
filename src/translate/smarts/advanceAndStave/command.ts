import {Clause, Io, Word} from "@sagittal/general"
import {caseDesensitize, computeCaseDesensitizedCodes} from "../../case"
import {
    ADVANCE_TO_END_COMMAND_CODE,
    Code,
    COMMAND_MAP,
    SMART_ADVANCE_COMMAND_CODE,
    SMART_STAVE_OFF_COMMAND_CODE,
    SMART_STAVE_ON_COMMAND_CODE,
    Unicode,
} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {computePitchFromCode, isPitchCommandCode, PitchOrPosition} from "../positionAndClef"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"
import {computeEndOfLineUnicodeClauseAndUpdateSmarts} from "./endOfLine"
import {computeSpacing, isSpacingCommandCode} from "./spacing"

const CASE_DESENSITIZED_COMMAND_CODES = computeCaseDesensitizedCodes(COMMAND_MAP)

const isCommandCode = (input: Io & Word): boolean => {
    const caseDesensitizedCode = caseDesensitize(input as Code & Word)

    return CASE_DESENSITIZED_COMMAND_CODES.includes(caseDesensitizedCode)
}

const computeCommandUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    let commandUnicodeClause: Unicode & Clause = EMPTY_UNICODE as Unicode & Clause

    const caseDesensitizedCode = caseDesensitize(input as Code & Word)

    if (caseDesensitizedCode === caseDesensitize(SMART_ADVANCE_COMMAND_CODE)) {
        commandUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (caseDesensitizedCode === caseDesensitize(ADVANCE_TO_END_COMMAND_CODE)) {
        smarts.advanceToEnd = true
        commandUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (caseDesensitizedCode === caseDesensitize(SMART_STAVE_ON_COMMAND_CODE)) {
        smarts.staveOn = true
    } else if (caseDesensitizedCode === caseDesensitize(SMART_STAVE_OFF_COMMAND_CODE)) {
        commandUnicodeClause = computeEndOfLineUnicodeClauseAndUpdateSmarts()
        smarts.staveOn = false
    } else if (isSpacingCommandCode(caseDesensitizedCode)) {
        smarts.spacing = computeSpacing(caseDesensitizedCode)
    } else if (isPitchCommandCode(caseDesensitizedCode)) {
        smarts.pitch = computePitchFromCode(caseDesensitizedCode)
        smarts.pitchOrPosition = PitchOrPosition.PITCH
    }

    // TODO: CLEAN, READY TO GO: SMARTS ORGANIZATION
    //  Should I just rename ubiquitous things with "and" in them to "vertical" and "horizontal"?
    //  A new complication has arisen, a distinction between pitch or position, that should affect module organization

    return commandUnicodeClause
}

export {
    computeCommandUnicodeClauseAndUpdateSmarts,
    isCommandCode,
}
