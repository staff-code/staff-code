import {Io, sumTexts} from "@sagittal/general"
import {
    computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts,
    computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts,
} from "./smarts"
import {computeSymbol} from "./symbol"
import {Unicode} from "./symbols"
import {computeUnicode} from "./unicode"

const computeInputWordUnicode = (inputWord: Io): Unicode => {
    const symbol = computeSymbol(inputWord)

    const smartAdvanceAndSmartStavePrefixUnicode =
        computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts(symbol)
    const smartPositionAndSmartClefPrefixUnicode =
        computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts(symbol)
    const unicode = computeUnicode(symbol)

    const inputWordUnicode =
        sumTexts(smartAdvanceAndSmartStavePrefixUnicode, smartPositionAndSmartClefPrefixUnicode, unicode)

    // tslint:disable-next-line
    // console.warn(`${inputWord} → ${computeCodewordsFromUnicode(inputWordUnicode)}\nad${smarts.advanceWidth} st${smarts.staveWidth}\n`)

    return inputWordUnicode
}


export {
    computeInputWordUnicode,
}
