import {Clause, Io, Word} from "@sagittal/general"
import {caseDesensitize, computeCaseDesensitizedCodes} from "../case"
import {
    ADVANCE_TO_END_COMMAND_CODE,
    Code,
    COMMAND_MAP,
    SMART_ADVANCE_COMMAND_CODE,
    SMART_STAVE_OFF_COMMAND_CODE,
    SMART_STAVE_ON_COMMAND_CODE,
    Unicode,
} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {smarts} from "./globals"
import {
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak,
    computeSpacing,
    isSpacingCommandCode,
} from "./horizontal"
import {computePitchFromCode, isPitchCommandCode, PitchOrPosition} from "./vertical"

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
        // TODO: CLEAN, READY TO GO: FUNCTIONS PER COMMAND
        //  I could actually factor out a stof function to save a line (the one below) in the unrecognized code function
        commandUnicodeClause = computeEndOfLineUnicodeClauseAndUpdateSmarts()
        smarts.staveOn = false
    } else if (isSpacingCommandCode(caseDesensitizedCode)) {
        smarts.spacing = computeSpacing(caseDesensitizedCode)
    } else if (isPitchCommandCode(caseDesensitizedCode)) {
        smarts.pitch = computePitchFromCode(caseDesensitizedCode)
        smarts.pitchOrPosition = PitchOrPosition.PITCH
    }

    return commandUnicodeClause
}

export {
    computeCommandUnicodeClauseAndUpdateSmarts,
    isCommandCode,
}
