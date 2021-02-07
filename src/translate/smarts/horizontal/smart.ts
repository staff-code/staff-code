import {Clause} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"

const computeSmartAdvanceUnicodeClauseAndUpdateSmarts = (): Unicode & Clause =>
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
        smarts.advanceWidth,
    )

export {
    computeSmartAdvanceUnicodeClauseAndUpdateSmarts,
}
