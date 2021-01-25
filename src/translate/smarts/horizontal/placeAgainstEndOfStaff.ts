import {Clause} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"

const computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts = (): Unicode & Clause => {
    smarts.advanceToEnd = true
    return computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
        smarts.advanceWidth,
    )
}

export {
    computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts,
}
