import {BLANK, Clause, decrement, increment, isEven, max, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {computeUnicodeWidth} from "../advanceAndStave"
import {smarts} from "../globals"
import {aboveOrBelowStave, computeStaffPosition, needsLegerLine} from "./needs"
import {computeLegerUnicode, computePositionUnicode} from "./unicode"

const computeSmartLegerUnicodeIntroClause = (): Unicode & Clause => {
    let smartLegerUnicodeIntroClause = BLANK as Unicode & Clause

    let position = computeStaffPosition()
    while (aboveOrBelowStave(position)) {
        if (isEven(position)) {
            smartLegerUnicodeIntroClause = sumTexts(
                smartLegerUnicodeIntroClause,
                `${computePositionUnicode(position)}${computeLegerUnicode()}` as Unicode & Clause,
            )
        }
        position = position > 0 ? decrement(position) : increment(position)
    }

    return smartLegerUnicodeIntroClause
}

const computeSmartLegerUnicodeIntroClauseAndUpdateSmarts = (unicode: Unicode & Word): Unicode & Clause => {
    if (needsLegerLine(unicode)) {
        smarts.advanceWidth = max(smarts.advanceWidth, computeUnicodeWidth(computeLegerUnicode()))

        return computeSmartLegerUnicodeIntroClause()
    }

    return EMPTY_UNICODE as Unicode & Clause
}

export {
    computeSmartLegerUnicodeIntroClauseAndUpdateSmarts,
}
