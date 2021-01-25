import {Clause, Io, Word} from "@sagittal/general"
import {caseDesensitize} from "../case"
import {
    Code,
    PLACE_AGAINST_END_OF_STAFF_ADVANCE_COMMAND_CODE,
    SMART_ADVANCE_COMMAND_CODE,
    SMART_STAVE_OFF_COMMAND_CODE,
    SMART_STAVE_ON_COMMAND_CODE,
    Unicode,
} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {smarts} from "./globals"
import {
    computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts,
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak,
    computeSmartStaveOffUnicodeClauseAndUpdateSmarts,
    computeSpacing,
    isSpacingCommandCode,
} from "./horizontal"
import {computePitchFromCode, isPitchCommandCode, PitchOrPosition} from "./vertical"

const computeCommandUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    let commandUnicodeClause: Unicode & Clause = EMPTY_UNICODE as Unicode & Clause

    const caseDesensitizedCode = caseDesensitize(input as Code & Word)

    if (caseDesensitizedCode === caseDesensitize(SMART_ADVANCE_COMMAND_CODE)) {
        commandUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (caseDesensitizedCode === caseDesensitize(PLACE_AGAINST_END_OF_STAFF_ADVANCE_COMMAND_CODE)) {
        commandUnicodeClause = computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts()
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
