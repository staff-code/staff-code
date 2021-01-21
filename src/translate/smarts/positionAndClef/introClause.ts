import {Clause, extendClause, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {computeSmartLegerUnicodeIntroClauseAndUpdateSmarts} from "../leger"
import {canBePositioned, computeSmartPosition, updateSmartClef} from "../positionAndClef"
import {computeSmartPositionUnicode} from "./position"

const computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts = (
    unicode: Unicode & Word,
): Unicode & Clause => {
    updateSmartClef(unicode)

    let smartPositionAndSmartClefUnicodeIntroClause = computeSmartLegerUnicodeIntroClauseAndUpdateSmarts(unicode)

    if (canBePositioned(unicode) && computeSmartPosition() !== 0) {
        smartPositionAndSmartClefUnicodeIntroClause = extendClause(
            smartPositionAndSmartClefUnicodeIntroClause,
            computeSmartPositionUnicode(),
        ) as Unicode & Clause
    }

    return smartPositionAndSmartClefUnicodeIntroClause
}

export {
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
}
