import {Clause, Io, Word} from "@sagittal/general"
import {caseDesensitize} from "../case"
import {
    Code,
    SET_NEWLINE_ADVANCE_COMMAND_CODE,
    SET_PLACE_AGAINST_END_OF_STAFF_ADVANCE_COMMAND_CODE,
    SMART_ADVANCE_COMMAND_CODE,
    SMART_STAVE_OFF_COMMAND_CODE,
    SMART_STAVE_ON_COMMAND_CODE,
    Unicode,
} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {smarts} from "./globals"
import {
    AltAdvance,
    computeSmartAdvanceUnicodeClauseAndUpdateSmarts,
    computeSmartStaveOffUnicodeClauseAndUpdateSmarts,
    computeSpacing,
    isSpacingCommandCode,
} from "./horizontal"
import {computePitchFromCode, isPitchCommandCode, PitchOrPosition} from "./vertical"

const computeCommandUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    let commandUnicodeClause: Unicode & Clause = EMPTY_UNICODE as Unicode & Clause

    const caseDesensitizedCode = caseDesensitize(input as Code & Word)

    if (caseDesensitizedCode === caseDesensitize(SMART_ADVANCE_COMMAND_CODE)) {
        commandUnicodeClause = computeSmartAdvanceUnicodeClauseAndUpdateSmarts()
    } else if (caseDesensitizedCode === caseDesensitize(SET_NEWLINE_ADVANCE_COMMAND_CODE)) {
        smarts.altAdvance = AltAdvance.NEWLINE
    } else if (caseDesensitizedCode === caseDesensitize(SET_PLACE_AGAINST_END_OF_STAFF_ADVANCE_COMMAND_CODE)) {
        smarts.altAdvance = AltAdvance.PLACE_AGAINST_END_OF_STAFF
    } else if (caseDesensitizedCode === caseDesensitize(SMART_STAVE_ON_COMMAND_CODE)) {
        smarts.staveOn = true
    } else if (caseDesensitizedCode === caseDesensitize(SMART_STAVE_OFF_COMMAND_CODE)) {
        commandUnicodeClause = computeSmartStaveOffUnicodeClauseAndUpdateSmarts()
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
}
