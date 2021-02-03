import {Clause} from "@sagittal/general"
import {Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"
import {computeNewlineAdvanceUnicodeClauseAndUpdateSmarts} from "./newline"
import {computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts} from "./placeAgainstEndOfStaff"
import {AltAdvance} from "./types"

const computeSmartAdvanceUnicodeClauseAndUpdateSmarts = (): Unicode & Clause => {
    let commandUnicodeClause: Unicode & Clause = EMPTY_UNICODE as Unicode & Clause

    if (smarts.altAdvance === AltAdvance.NEWLINE) {
        commandUnicodeClause = computeNewlineAdvanceUnicodeClauseAndUpdateSmarts()
    } else if (smarts.altAdvance === AltAdvance.PLACE_AGAINST_END_OF_STAFF) {
        commandUnicodeClause = computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts()
    } else {
        commandUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    }
    smarts.altAdvance = AltAdvance.NONE

    return commandUnicodeClause
}

export {
    computeSmartAdvanceUnicodeClauseAndUpdateSmarts,
}
