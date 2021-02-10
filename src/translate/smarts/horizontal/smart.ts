import {Clause, Unicode} from "@sagittal/general"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrNewline} from "./advanceOrNewline"

const computeSmartAdvanceUnicodeClauseAndUpdateSmarts = (): Unicode & Clause =>
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrNewline(
        smarts.advanceWidth,
    )

export {
    computeSmartAdvanceUnicodeClauseAndUpdateSmarts,
}
