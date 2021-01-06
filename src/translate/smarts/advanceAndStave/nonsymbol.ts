import {Clause, Io, subtract, Word} from "@sagittal/general"
import {LowercasedCode, NONSYMBOL_MAP, Octals, Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak} from "./advanceOrBreak"
import {computeSpacing, isSpacingCode} from "./spacing"

const NONSYMBOL_CODES = Object.keys(NONSYMBOL_MAP)

const isNonsymbolCode = (input: Io & Word): boolean => {
    const lowercasedCode: LowercasedCode & Word = input.toLowerCase() as LowercasedCode & Word

    return NONSYMBOL_CODES.includes(lowercasedCode)
}

const computeNonsymbolUnicodeClauseAndUpdateSmarts = (input: Io & Word): Unicode & Clause => {
    let nonsymbolUnicodeClause: Unicode & Clause = EMPTY_UNICODE as Unicode & Clause

    const lowercasedCode: LowercasedCode & Word = input.toLowerCase() as LowercasedCode & Word

    if (lowercasedCode === ";") {
        nonsymbolUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                smarts.advanceWidth,
            )
    } else if (lowercasedCode === ";;") {
        nonsymbolUnicodeClause =
            computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak(
                subtract(smarts.advanceWidth, smarts.spacing)
            )
    } else if (lowercasedCode === "en;") {
        smarts.advanceToEnd = true
    } else if (lowercasedCode === "ston") {
        smarts.staveOn = true
    } else if (lowercasedCode === "stof") {
        smarts.staveWidth = 0 as Octals
        smarts.staveOn = false
    } else if (isSpacingCode(lowercasedCode)) {
        smarts.spacing = computeSpacing(lowercasedCode)
    }

    return nonsymbolUnicodeClause
}

export {
    computeNonsymbolUnicodeClauseAndUpdateSmarts,
    isNonsymbolCode,
}
