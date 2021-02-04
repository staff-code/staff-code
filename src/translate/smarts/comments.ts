import {Clause, Io, Word} from "@sagittal/general"
import {Unicode} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {smarts} from "./globals"
import {AltAdvance} from "./horizontal"

const isCommenting = (input: Io & Word): boolean =>
    smarts.commenting || !!input.match(/^{/)

const computeCommentingUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    smarts.commenting = !input.match(/}$/)
    smarts.altAdvance = AltAdvance.NONE

    return EMPTY_UNICODE as Unicode & Clause
}

export {
    isCommenting,
    computeCommentingUnicodeClauseAndUpdateSmarts,
}
