import {max, subtract, sumTexts} from "@sagittal/general"
import {
    Code,
    EMPTY_UNICODE,
    MANUAL_ADVANCE_MAP,
    SMART_ADVANCE_MAP,
    SMART_STAVE_MAP,
    Symbol,
    Unicode,
    Width,
} from "../symbols"
import {computeMapUnicodes, computeUnicodeForCode} from "../utility"
import {computeSymbolWidth} from "../width"
import {smarts} from "./globals"

const SMART_ADVANCE_UNICODES = computeMapUnicodes(SMART_ADVANCE_MAP)
const MANUAL_ADVANCE_UNICODES = computeMapUnicodes(MANUAL_ADVANCE_MAP)
const WIDTH_TO_ADVANCE_UNICODE_ARRAY: Unicode[] = [EMPTY_UNICODE, ...MANUAL_ADVANCE_UNICODES]

const MAX_ADVANCE_UNICODE = computeUnicodeForCode(Code["24;"])
const MAX_ADVANCE_WIDTH: Width = 24 as Width

const ST8_UNICODE = computeUnicodeForCode(Code["st8"])
const ST16_UNICODE = computeUnicodeForCode(Code["st16"])
const ST24_UNICODE = computeUnicodeForCode(Code["st24"])

const MIN_STAVE_WIDTH = 8 as Width
const MIN_STAVE_UNICODE = ST8_UNICODE
const MIN_STAVE_WIDTH_ADVANCE = computeUnicodeForCode(Code["8;"])

const MED_STAVE_WIDTH = 16 as Width
const MED_STAVE_UNICODE = ST16_UNICODE
const MED_STAVE_WIDTH_ADVANCE = computeUnicodeForCode(Code["16;"])

const MAX_STAVE_WIDTH = 24 as Width
const MAX_STAVE_UNICODE = ST24_UNICODE
const MAX_STAVE_WIDTH_ADVANCE = computeUnicodeForCode(Code["24;"])

const SMART_STAVE_ON_UNICODE = computeUnicodeForCode(Code["st"])
const SMART_STAVE_OFF_UNICODE = computeUnicodeForCode(Code["stof"])
const SMART_STAVE_UNICODES = computeMapUnicodes(SMART_STAVE_MAP)

const BREAK_UNICODE = computeUnicodeForCode(Code["br;"])

const computeAdvanceUnicode = (width: Width): Unicode => {
    let remainingWidth = width

    let unicodePhrase = EMPTY_UNICODE
    while (remainingWidth >= MAX_ADVANCE_WIDTH) {
        remainingWidth = subtract(remainingWidth, MAX_ADVANCE_WIDTH)
        unicodePhrase = sumTexts(unicodePhrase, MAX_ADVANCE_UNICODE)
    }

    return sumTexts(unicodePhrase, WIDTH_TO_ADVANCE_UNICODE_ARRAY[remainingWidth])
}

const computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave = (width: Width): Unicode => {
    let advancePrefixUnicode
    if (smarts.staveWidth >= width) {
        smarts.staveWidth = subtract(smarts.staveWidth, width)

        advancePrefixUnicode = computeAdvanceUnicode(width)
    } else if (!smarts.staveOn) {
        advancePrefixUnicode = computeAdvanceUnicode(width)
    } else {
        const useUpExistingStaveAdvanceUnicode: Unicode = computeAdvanceUnicode(smarts.staveWidth)
        let remainingAdvanceWidthWeStillNeedToApply: Width = subtract(width, smarts.staveWidth)

        let staveAndAdvanceUnicode = "" as Unicode

        while (remainingAdvanceWidthWeStillNeedToApply > MAX_STAVE_WIDTH) {
            staveAndAdvanceUnicode = sumTexts(staveAndAdvanceUnicode, MAX_STAVE_UNICODE, MAX_STAVE_WIDTH_ADVANCE)
            remainingAdvanceWidthWeStillNeedToApply = subtract(remainingAdvanceWidthWeStillNeedToApply, MAX_STAVE_WIDTH)
        }

        while (remainingAdvanceWidthWeStillNeedToApply > MED_STAVE_WIDTH) {
            staveAndAdvanceUnicode = sumTexts(staveAndAdvanceUnicode, MED_STAVE_UNICODE, MED_STAVE_WIDTH_ADVANCE)
            remainingAdvanceWidthWeStillNeedToApply = subtract(remainingAdvanceWidthWeStillNeedToApply, MED_STAVE_WIDTH)
        }

        while (remainingAdvanceWidthWeStillNeedToApply > MIN_STAVE_WIDTH) {
            staveAndAdvanceUnicode = sumTexts(staveAndAdvanceUnicode, MIN_STAVE_UNICODE, MIN_STAVE_WIDTH_ADVANCE)
            remainingAdvanceWidthWeStillNeedToApply = subtract(remainingAdvanceWidthWeStillNeedToApply, MIN_STAVE_WIDTH)
        }

        const remainingStaveAdvanceUnicode = computeAdvanceUnicode(remainingAdvanceWidthWeStillNeedToApply)

        smarts.staveWidth = subtract(MIN_STAVE_WIDTH, remainingAdvanceWidthWeStillNeedToApply)

        advancePrefixUnicode = sumTexts(
            useUpExistingStaveAdvanceUnicode,
            staveAndAdvanceUnicode,
            MIN_STAVE_UNICODE,
            remainingStaveAdvanceUnicode,
        )
    }

    smarts.advanceWidth = 0 as Width

    return advancePrefixUnicode
}

const computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts = (symbol: Symbol): Unicode => {
    let smartAdvanceAndSmartStavePrefixUnicode
    if (isSmartAdvanceUnicode(symbol.unicode)) {
        smartAdvanceAndSmartStavePrefixUnicode =
            computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave(smarts.advanceWidth)
    } else if (isManualAdvanceUnicode(symbol.unicode)) {
        smartAdvanceAndSmartStavePrefixUnicode =
            computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave(symbol.width!)
    } else if (symbol.unicode === BREAK_UNICODE) {
        smartAdvanceAndSmartStavePrefixUnicode =
            computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave(smarts.advanceWidth)
        smarts.staveWidth = 0 as Width
    } else {
        updateSmartStave(symbol)

        const maxSymbolWidthSinceLastAdvance = max(smarts.advanceWidth, computeSymbolWidth(symbol))
        smarts.advanceWidth = maxSymbolWidthSinceLastAdvance

        smartAdvanceAndSmartStavePrefixUnicode = EMPTY_UNICODE
    }

    return smartAdvanceAndSmartStavePrefixUnicode
}

const isSmartAdvanceUnicode = (unicodeWord: Unicode): boolean =>
    SMART_ADVANCE_UNICODES.includes(unicodeWord)

const isManualAdvanceUnicode = (unicodeWord: Unicode): boolean =>
    MANUAL_ADVANCE_UNICODES.includes(unicodeWord)

const updateSmartStave = ({unicode}: Symbol): void => {
    if (unicode === SMART_STAVE_ON_UNICODE) smarts.staveOn = true
    if (unicode === SMART_STAVE_OFF_UNICODE) {
        smarts.staveWidth = 0 as Width
        smarts.staveOn = false
    }

    if (unicode === ST8_UNICODE) smarts.staveWidth = smarts.staveWidth + 8 as Width
    if (unicode === ST16_UNICODE) smarts.staveWidth = smarts.staveWidth + 16 as Width
    if (unicode === ST24_UNICODE) smarts.staveWidth = smarts.staveWidth + 24 as Width
}

const isSmartStaveUnicode = (unicodeWord: Unicode): boolean =>
    SMART_STAVE_UNICODES.includes(unicodeWord)

export {
    computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts,
    isSmartAdvanceUnicode,
    isManualAdvanceUnicode,
    updateSmartStave,
    isSmartStaveUnicode,
}
