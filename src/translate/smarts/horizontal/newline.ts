import {Clause, sumTexts, Unicode} from "@sagittal/general"
import {smarts} from "../globals"
import {computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts} from "./endOfInk"

const computeNewlineAdvanceUnicodeClauseAndUpdateSmarts = (): Unicode & Clause => {
    const unicodeClause = sumTexts(
        computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts(),
        "\n" as Unicode & Clause,
    ) as Unicode & Clause

    smarts.advanceToEnd = false

    return unicodeClause
}

export {
    computeNewlineAdvanceUnicodeClauseAndUpdateSmarts,
}
