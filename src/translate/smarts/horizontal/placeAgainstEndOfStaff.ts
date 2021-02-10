import {Clause, Unicode} from "@sagittal/general"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrNewline} from "./advanceOrNewline"

const computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts = (): Unicode & Clause => {
    smarts.advanceToEnd = true
    return computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrNewline(
        smarts.advanceWidth,
    )
}

export {
    computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts,
}
