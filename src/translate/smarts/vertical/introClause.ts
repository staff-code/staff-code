import {Clause, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {computeSmartLegerUnicodeIntroClauseAndUpdateSmarts} from "../leger"
import {canBePositioned, computeSmartPitchOrSmartPositionPosition, updateSmartClef} from "../vertical"
import {computeSmartPitchOrSmartPositionUnicode} from "./pitchOrPosition"
import {updateSmartPosition} from "./position"

const computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts = (
    unicode: Unicode & Word,
): Unicode & Clause => {
    updateSmartClef(unicode)
    updateSmartPosition(unicode)

    let smartPositionAndSmartClefUnicodeIntroClause = computeSmartLegerUnicodeIntroClauseAndUpdateSmarts(unicode)

    if (canBePositioned(unicode) && computeSmartPitchOrSmartPositionPosition() !== 0) {
        smartPositionAndSmartClefUnicodeIntroClause = sumTexts(
            smartPositionAndSmartClefUnicodeIntroClause,
            computeSmartPitchOrSmartPositionUnicode() as Unicode,
        ) as Unicode & Clause
    }

    return smartPositionAndSmartClefUnicodeIntroClause
}

export {
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
}
