import {BLANK, Clause, decrement, increment, isEven, max, sumTexts, Word} from "@sagittal/general"
import {computeDebugCodeFromUnicode, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {computeUnicodeWidth} from "../advanceAndStave"
import {smarts} from "../globals"
import {computeLegerLineUnicode} from "./leger"
import {aboveOrBelowStave, computeStaffPosition, needsLegerLine} from "./needs"
import {computePositionUnicode} from "./position"

const computeSmartLegerUnicodeIntroClause = (legerLineUnicode: Unicode & Word): Unicode & Clause => {
    let smartLegerUnicodeIntroClause = BLANK as Unicode & Clause

    let position = computeStaffPosition()
    while (aboveOrBelowStave(position)) {
        if (isEven(position)) {
            smartLegerUnicodeIntroClause = sumTexts(
                smartLegerUnicodeIntroClause,
                `${computePositionUnicode(position)}${legerLineUnicode}` as Unicode & Clause,
            )
        }
        position = position > 0 ? decrement(position) : increment(position)
    }

    return smartLegerUnicodeIntroClause
}

const computeSmartLegerUnicodeIntroClauseAndUpdateSmarts = (unicode: Unicode & Word): Unicode & Clause => {
    if (needsLegerLine(unicode)) {
        const legerLineUnicode = computeLegerLineUnicode(unicode)
        smarts.advanceWidth = max(smarts.advanceWidth, computeUnicodeWidth(legerLineUnicode))

        return computeSmartLegerUnicodeIntroClause(legerLineUnicode)
    }

    return EMPTY_UNICODE as Unicode & Clause
}

export {
    computeSmartLegerUnicodeIntroClauseAndUpdateSmarts,
}
