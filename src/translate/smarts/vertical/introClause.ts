import {Clause, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeSmartLegerUnicodeIntroClauseAndUpdateSmarts} from "../leger"
import {canBePositioned, updateSmartClef} from "../vertical"
import {computeSmartPositionUnicode, updateSmartPosition} from "./position"

const computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts = (
    unicode: Unicode & Word,
): Unicode & Clause => {
    updateSmartClef(unicode)
    updateSmartPosition(unicode)

    let smartPositionAndSmartClefUnicodeIntroClause = computeSmartLegerUnicodeIntroClauseAndUpdateSmarts(unicode)

    if (canBePositioned(unicode) && smarts.position !== 0) {
        smartPositionAndSmartClefUnicodeIntroClause = sumTexts(
            smartPositionAndSmartClefUnicodeIntroClause,
            computeSmartPositionUnicode() as Unicode,
        ) as Unicode & Clause
    }

    return smartPositionAndSmartClefUnicodeIntroClause
}

export {
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
}
