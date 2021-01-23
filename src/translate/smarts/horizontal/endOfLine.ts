import {Clause, subtract, sumTexts} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"

const computeEndOfLineWidth = (): Octals => {
    const unspacedAdvance = subtract(smarts.advanceWidth, smarts.spacing)

    return unspacedAdvance < 0 ? 0 as Octals : unspacedAdvance
}

const computeEndOfLineUnicodeClauseAndUpdateSmarts = (): Unicode & Clause =>
    sumTexts(
        // TODO: CLEAN, READY TO GO: COMMENT OR NAMED FUNCTION THESE END-OF-LINE THINGS
        //  Because I cannot figure out why the hell they have to be this way now...
        //  AKA "final advance", used by "stof", "br;", and at the end of a sentence
        //  It first goes as far as the previous character's advance
        //  (ignoring spacing, because there's nothing after it to space against)
        //  And then goes to the end of whatever segment of staff you land on, having advanced that far
        computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
            computeEndOfLineWidth(),
        ),
        computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
            smarts.staveWidth,
        ),
    )

export {
    computeEndOfLineUnicodeClauseAndUpdateSmarts,
    computeEndOfLineWidth,
}
