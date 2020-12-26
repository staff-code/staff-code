import {Io, sumTexts} from "@sagittal/general"
import {Unicode} from "./codes"
import {EMPTY_UNICODE} from "./constants"
import {
    computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts,
    computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts,
    isCommenting,
} from "./smarts"
import {computeSymbol} from "./symbol"
import {computeUnicode} from "./unicode"

const computeInputWordUnicode = (inputWord: Io): Unicode => {
    if (isCommenting(inputWord)) return EMPTY_UNICODE

    const symbol = computeSymbol(inputWord)

    const smartAdvanceAndSmartStavePrefixUnicode =
        computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts(symbol)
    const smartPositionAndSmartClefPrefixUnicode =
        computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts(symbol)
    const unicode = computeUnicode(symbol)

    const inputWordUnicode =
        sumTexts(smartAdvanceAndSmartStavePrefixUnicode, smartPositionAndSmartClefPrefixUnicode, unicode)

    // tslint:disable-next-line
    // console.warn(`${inputWord} → ${computeCodesFromUnicode(inputWordUnicode)}\nad${smarts.advanceWidth} st${smarts.staveWidth}\n`)

    return inputWordUnicode
}


export {
    computeInputWordUnicode,
}
