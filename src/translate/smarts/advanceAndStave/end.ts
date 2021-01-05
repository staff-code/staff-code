import {add, Clause, extendClause, subtract, sumTexts, Word} from "@sagittal/general"
import {Octals, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {NARROW_STAVE_UNICODES} from "./advanceOrBreak"
import {NARROW_STAVE_WIDTH} from "./constants"
import {computeAdvanceUnicode} from "./unicode"
import {computeUnicodeWidth} from "./width"

const computeAdvanceToEndIntroClause = (unicode: Unicode & Word): Unicode & Clause => {
    const unicodeWidth = computeUnicodeWidth(unicode, {spacing: false})

    let advanceToEndIntroClause = EMPTY_UNICODE as Unicode & Clause

    // todo: okay i think i'm just not going to support anything with width > 8
    //  no wait, I can just get it to work by dropping a bigger chunk of stave down!
    //  but you should test drive it out
    //  would be ideal if it had a helper method
    //  should not export this constant all the way from over there
    //  leverage the ability to use 16 or 24, if you can
    //  an x'it'd test is there already for this
    if (unicodeWidth > smarts.staveWidth) {
        advanceToEndIntroClause = sumTexts(
            advanceToEndIntroClause,
            computeAdvanceUnicode(smarts.staveWidth),
            NARROW_STAVE_UNICODES[smarts.stave] as string,
        ) as Unicode & Clause
        smarts.staveWidth = NARROW_STAVE_WIDTH
    }

    return sumTexts(
        advanceToEndIntroClause,
        computeAdvanceUnicode(subtract(smarts.staveWidth, unicodeWidth)),
    )
}

const computeAdvanceToEndIntroClauseAndUpdateSmarts = (unicode: Unicode & Word): Unicode & Clause => {
    const advanceToEndIntroClause = computeAdvanceToEndIntroClause(unicode)

    smarts.advanceWidth = 0 as Octals
    smarts.advanceToEnd = false

    return advanceToEndIntroClause
}

export {
    computeAdvanceToEndIntroClauseAndUpdateSmarts,
}
