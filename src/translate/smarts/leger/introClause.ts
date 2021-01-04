import {BLANK, Clause, decrement, increment, isEven, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {computeLegerLineUnicode} from "./leger"
import {aboveOrBelowStave, computeStaffPosition, needsLegerLine} from "./needs"
import {computePositionUnicode} from "./position"

const computeSmartLegerUnicodeIntroClause = (unicode: Unicode & Word): Unicode & Clause => {
    const legerLineUnicode = computeLegerLineUnicode(unicode)

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

const computeSmartLegerUnicodeIntroClauseAndUpdateSmarts = (unicode: Unicode & Word): Unicode & Clause =>
    needsLegerLine(unicode) ?
        computeSmartLegerUnicodeIntroClause(unicode) :
        EMPTY_UNICODE as Unicode & Clause

export {
    computeSmartLegerUnicodeIntroClauseAndUpdateSmarts,
}
