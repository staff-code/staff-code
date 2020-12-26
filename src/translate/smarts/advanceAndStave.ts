import {max, subtract, sumTexts} from "@sagittal/general"
import {
    Codeword,
    NOT_SMuFL_MANUAL_ADVANCE_MAP,
    NOT_SMuFL_SMART_ADVANCE_MAP,
    NOT_SMuFL_SMART_SPACING_MAP,
    NOT_SMuFL_SMART_STAVE_MAP,
    Octels,
    Symbol,
    Unicode,
} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {computeMapUnicodes, computeUnicodeForCode} from "../utility"
import {computeSymbolWidth} from "../width"
import {smarts} from "./globals"

// TODO: CLEAN, BREAK DOWN ADVANCE AND STAVE AND POSITION AND CLEF INTO MODULES WITHIN SMARTS

const SMART_ADVANCE_UNICODES = computeMapUnicodes(NOT_SMuFL_SMART_ADVANCE_MAP)
const MANUAL_ADVANCE_UNICODES = computeMapUnicodes(NOT_SMuFL_MANUAL_ADVANCE_MAP)
const WIDTH_TO_ADVANCE_UNICODE_ARRAY: Unicode[] = [EMPTY_UNICODE, ...MANUAL_ADVANCE_UNICODES]

const MAX_ADVANCE_UNICODE = computeUnicodeForCode("24;" as Codeword)
const MAX_ADVANCE_WIDTH: Octels = 24 as Octels

const ST8_UNICODE = computeUnicodeForCode("st8" as Codeword)
const ST16_UNICODE = computeUnicodeForCode("st16" as Codeword)
const ST24_UNICODE = computeUnicodeForCode("st24" as Codeword)

const MIN_STAVE_WIDTH = 8 as Octels
const MIN_STAVE_UNICODE = ST8_UNICODE
const MIN_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("8;" as Codeword)

const MED_STAVE_WIDTH = 16 as Octels
const MED_STAVE_UNICODE = ST16_UNICODE
const MED_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("16;" as Codeword)

const MAX_STAVE_WIDTH = 24 as Octels
const MAX_STAVE_UNICODE = ST24_UNICODE
const MAX_STAVE_WIDTH_ADVANCE = computeUnicodeForCode("24;" as Codeword)

const SMART_STAVE_ON_UNICODE = computeUnicodeForCode("ston" as Codeword)
const SMART_STAVE_OFF_UNICODE = computeUnicodeForCode("stof" as Codeword)
const SMART_STAVE_UNICODES = computeMapUnicodes(NOT_SMuFL_SMART_STAVE_MAP)

const BREAK_UNICODE = computeUnicodeForCode("br;" as Codeword)

const SPACING_UNICODES = computeMapUnicodes(NOT_SMuFL_SMART_SPACING_MAP)

const computeAdvanceUnicode = (width: Octels): Unicode => {
    let remainingWidth = width

    let unicodeClause = EMPTY_UNICODE
    while (remainingWidth >= MAX_ADVANCE_WIDTH) {
        remainingWidth = subtract(remainingWidth, MAX_ADVANCE_WIDTH)
        unicodeClause = sumTexts(unicodeClause, MAX_ADVANCE_UNICODE)
    }

    return sumTexts(unicodeClause, WIDTH_TO_ADVANCE_UNICODE_ARRAY[remainingWidth])
}

const computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave = (width: Octels): Unicode => {
    let advancePrefixUnicode
    if (smarts.staveWidth >= width) {
        smarts.staveWidth = subtract(smarts.staveWidth, width)

        advancePrefixUnicode = computeAdvanceUnicode(width)
    } else if (!smarts.staveOn) {
        advancePrefixUnicode = computeAdvanceUnicode(width)
    } else {
        const useUpExistingStaveAdvanceUnicode: Unicode = computeAdvanceUnicode(smarts.staveWidth)
        let remainingAdvanceWidthWeStillNeedToApply: Octels = subtract(width, smarts.staveWidth)

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

    smarts.advanceWidth = 0 as Octels

    return advancePrefixUnicode
}

const computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts = (symbol: Symbol): Unicode => {
    let smartAdvanceAndSmartStavePrefixUnicode
    const unicode = symbol.unicode
    if (isSmartAdvanceUnicode(unicode)) {
        smartAdvanceAndSmartStavePrefixUnicode =
            computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave(smarts.advanceWidth)
    } else if (isManualAdvanceUnicode(unicode)) {
        smartAdvanceAndSmartStavePrefixUnicode =
            computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave(symbol.width!)
    } else if (unicode === BREAK_UNICODE) {
        smartAdvanceAndSmartStavePrefixUnicode =
            computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmartAdvanceAndSmartStave(smarts.advanceWidth)
        smarts.staveWidth = 0 as Octels
    } else if (isSpacingUnicode(unicode)) {
        smarts.spacing = symbol.width!
        smartAdvanceAndSmartStavePrefixUnicode = EMPTY_UNICODE
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

const isSpacingUnicode = (unicodeWord: Unicode): boolean =>
    SPACING_UNICODES.includes(unicodeWord)

const updateSmartStave = ({unicode}: Symbol): void => {
    if (unicode === SMART_STAVE_ON_UNICODE) smarts.staveOn = true
    if (unicode === SMART_STAVE_OFF_UNICODE) {
        smarts.staveWidth = 0 as Octels
        smarts.staveOn = false
    }

    if (unicode === ST8_UNICODE) smarts.staveWidth = smarts.staveWidth + 8 as Octels
    if (unicode === ST16_UNICODE) smarts.staveWidth = smarts.staveWidth + 16 as Octels
    if (unicode === ST24_UNICODE) smarts.staveWidth = smarts.staveWidth + 24 as Octels
}

const isSmartStaveUnicode = (unicodeWord: Unicode): boolean =>
    SMART_STAVE_UNICODES.includes(unicodeWord)

export {
    computeSmartAdvanceAndSmartStavePrefixUnicodeAndUpdateSmarts,
    isSmartAdvanceUnicode,
    isManualAdvanceUnicode,
    updateSmartStave,
    isSmartStaveUnicode,
    isSpacingUnicode,
}
