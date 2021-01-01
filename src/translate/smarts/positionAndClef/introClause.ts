import {Clause, extendClause, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {computeSmartLegerUnicodeIntroClauseAndUpdateSmarts} from "../leger"
import {canBePositioned, updateSmartClef, updateSmartPosition} from "../positionAndClef"
import {NOT_SMuFL_ZERO_POSITION_UNICODE} from "./constants"

const computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts = (
    unicode: Unicode & Word,
): Unicode & Clause => {
    updateSmartClef(unicode)
    updateSmartPosition(unicode)

    let smartPositionAndSmartClefUnicodeIntroClause = computeSmartLegerUnicodeIntroClauseAndUpdateSmarts(unicode)

    if (canBePositioned(unicode) && smarts.positionUnicode !== NOT_SMuFL_ZERO_POSITION_UNICODE) {
        smartPositionAndSmartClefUnicodeIntroClause = extendClause(
            smartPositionAndSmartClefUnicodeIntroClause,
            smarts.positionUnicode,
        ) as Unicode & Clause
    }

    return smartPositionAndSmartClefUnicodeIntroClause
}

export {
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
}
