import {
    BASS_POSITION_MAP,
    Code,
    CODE_MAP_PLUS_SMART_CODES,
    EMPTY_UNICODE,
    POSITION_MAP,
    Symbol,
    TREBLE_POSITION_MAP,
    Unicode,
} from "../symbols"
import {computeMapUnicodes, computeUnicodeForCode} from "../utility"
import {smarts} from "./globals"

const TREBLE_UNICODE = computeUnicodeForCode(Code["tbcf"])
const BASS_UNICODE = computeUnicodeForCode(Code["bscf"])

const BASS_CODE_MAP: Record<Code, Symbol> = {...CODE_MAP_PLUS_SMART_CODES, ...BASS_POSITION_MAP} as Record<Code, Symbol>
const TREBLE_CODE_MAP: Record<Code, Symbol> = {...CODE_MAP_PLUS_SMART_CODES, ...TREBLE_POSITION_MAP} as Record<Code, Symbol>
// TODO: FEATURE IMPROVE, READY TO GO: ALTO AND TENOR STAFF

const POSITION_UNICODES = computeMapUnicodes(POSITION_MAP)
const FAKE_TEMP_MIDDLE_POSITION_UNICODE = computeUnicodeForCode(Code["up0"])

const isInLegerLineRange = (unicodeWord: Unicode): boolean =>
    unicodeWord >= "\uE022" && unicodeWord <= "\uE024"

const isInNoteheadNoteStemOrBeamedGroupsOfNotesRange = (unicodeWord: Unicode): boolean =>
    unicodeWord >= "\uE0A0" && unicodeWord <= "\uE21F"

const isInSpacingRange = (unicodeWord: Unicode): boolean =>
    unicodeWord >= "\uE388" && unicodeWord <= "\uE38F"

const isInOtherSagittalControlledNowForStaffCodeFeaturesRange = (unicodeWord: Unicode): boolean =>
    unicodeWord >= "\uE40C" && unicodeWord <= "\uE41F"

const isInFlagsAccidentalsArticulationHoldsPausesOrRestsRange = (unicodeWord: Unicode): boolean =>
    unicodeWord >= "\uE240" && unicodeWord <= "\uE4FF"
    && !isInSpacingRange(unicodeWord)
    && !isInOtherSagittalControlledNowForStaffCodeFeaturesRange(unicodeWord)

const isInMedievalAndRenaissanceRange = (unicodeWord: Unicode): boolean =>
    unicodeWord >= "\uE900" && unicodeWord <= "\uEA1F"

const isInKievanSquareNotationRange = (unicodeWord: Unicode): boolean =>
    unicodeWord >= "\uEC30" && unicodeWord <= "\uEC3F"

const canBePositioned = (unicodeWord: Unicode): boolean =>
    isInLegerLineRange(unicodeWord)
    || isInNoteheadNoteStemOrBeamedGroupsOfNotesRange(unicodeWord)
    || isInFlagsAccidentalsArticulationHoldsPausesOrRestsRange(unicodeWord)
    || isInMedievalAndRenaissanceRange(unicodeWord)
    || isInKievanSquareNotationRange(unicodeWord)

const isPositionUnicode = (unicodeWord: Unicode): boolean =>
    POSITION_UNICODES.includes(unicodeWord)

const updateSmartPosition = ({unicode}: Symbol): void => {
    if (isPositionUnicode(unicode)) smarts.position = unicode
}

// TODO: FEATURE ADJUST, READY TO GO: CLEFS CAN BE CSP'D AND THE MIDDLE C WILL BE ADJUSTED
//  This will be blocked on adding the ligatures to the font, though
//  That part is introduced here: http://forum.sagittal.org/viewtopic.php?p=3163#p3163
//  Dave says "So in future, someone who wanted a tenor clef would write "up2 Ccl ;" or "[ tncl up2 Ccl ] tncl ;"."
//  Then see: http://forum.sagittal.org/viewtopic.php?p=3166#p3166
//  For an explanation of how instead you should just start tracking where middle C is

const computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts = (symbol: Symbol): Unicode => {
    updateSmartClef(symbol)
    updateSmartPosition(symbol)

    return canBePositioned(symbol.unicode) && smarts.position !== FAKE_TEMP_MIDDLE_POSITION_UNICODE ?
        smarts.position :
        EMPTY_UNICODE
}

const updateSmartClef = ({unicode}: Symbol): void => {
    if (unicode === TREBLE_UNICODE) smarts.codeMap = TREBLE_CODE_MAP
    if (unicode === BASS_UNICODE) smarts.codeMap = BASS_CODE_MAP
}

export {
    canBePositioned,
    updateSmartPosition,
    isPositionUnicode,
    computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts,
    updateSmartClef,
    TREBLE_CODE_MAP,
}
