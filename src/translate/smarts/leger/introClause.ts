import {BLANK, Clause, decrement, increment, isEven, sumTexts, Unicode, Word} from "@sagittal/general"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {computeLegerLineUnicode} from "./leger"
import {aboveOrBelowStave, needsLegerLine} from "./needs"
import {computePositionUnicode} from "./position"

const computeSmartLegerUnicodeIntroClause = (unicode: Unicode & Word): Unicode & Clause => {
    const legerLineUnicode = computeLegerLineUnicode(unicode)

    let smartLegerUnicodeIntroClause = BLANK as Unicode & Clause
    let position = smarts.position
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
    computeSmartLegerUnicodeIntroClause,
    computeSmartLegerUnicodeIntroClauseAndUpdateSmarts,
}
