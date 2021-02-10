import {caseDesensitize, Clause, Io, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../bin"
import {
    NEWLINE_ADVANCE_COMMAND_CODE,
    PLACE_AGAINST_END_OF_STAFF_ADVANCE_COMMAND_CODE,
    SMART_ADVANCE_COMMAND_CODE,
    SMART_STAVE_OFF_COMMAND_CODE,
    SMART_STAVE_ON_COMMAND_CODE,
} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {smarts} from "./globals"
import {
    computeNewlineAdvanceUnicodeClauseAndUpdateSmarts,
    computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts,
    computeSmartAdvanceUnicodeClauseAndUpdateSmarts,
    computeSmartStaveOffUnicodeClauseAndUpdateSmarts,
    computeSpacing,
    isSpacingCommandCode,
} from "./horizontal"
import {computePositionFromPitchCommandCode, isPitchCommandCode} from "./vertical"

const computeCommandUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    let commandUnicodeClause: Unicode & Clause = EMPTY_UNICODE as Unicode & Clause

    const caseDesensitizedCode = caseDesensitize(input as Code & Word)

    if (caseDesensitizedCode === caseDesensitize(SMART_ADVANCE_COMMAND_CODE)) {
        commandUnicodeClause = computeSmartAdvanceUnicodeClauseAndUpdateSmarts()
    } else if (caseDesensitizedCode === caseDesensitize(NEWLINE_ADVANCE_COMMAND_CODE)) {
        commandUnicodeClause = computeNewlineAdvanceUnicodeClauseAndUpdateSmarts()
    } else if (caseDesensitizedCode === caseDesensitize(PLACE_AGAINST_END_OF_STAFF_ADVANCE_COMMAND_CODE)) {
        commandUnicodeClause = computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts()
    } else if (caseDesensitizedCode === caseDesensitize(SMART_STAVE_ON_COMMAND_CODE)) {
        smarts.staveOn = true
    } else if (caseDesensitizedCode === caseDesensitize(SMART_STAVE_OFF_COMMAND_CODE)) {
        commandUnicodeClause = computeSmartStaveOffUnicodeClauseAndUpdateSmarts()
    } else if (isSpacingCommandCode(caseDesensitizedCode)) {
        smarts.spacing = computeSpacing(caseDesensitizedCode)
    } else if (isPitchCommandCode(caseDesensitizedCode)) {
        smarts.position = computePositionFromPitchCommandCode(caseDesensitizedCode)
    }

    return commandUnicodeClause
}

export {
    computeCommandUnicodeClauseAndUpdateSmarts,
}
