import {RecordKey} from "@sagittal/general"
import {
    BASS_POSITION_ALIASES_MAP,
    Code,
    CODE_MAP,
    GENERIC_POSITION_ALIASES_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
    Symbol,
    TREBLE_POSITION_ALIASES_MAP,
    Unicode,
} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {computeMapUnicodes, computeUnicodeForCode} from "../utility"
import {smarts} from "./globals"

const TREBLE_UNICODE = computeUnicodeForCode("Gcl" as Code)
const BASS_UNICODE = computeUnicodeForCode("Fcl" as Code)

const BASS_CODE_MAP: Record<RecordKey<Code>, Symbol> =
    {...CODE_MAP, ...BASS_POSITION_ALIASES_MAP} as Record<Code, Symbol>
const TREBLE_CODE_MAP: Record<RecordKey<Code>, Symbol> =
    {...CODE_MAP, ...TREBLE_POSITION_ALIASES_MAP} as Record<Code, Symbol>

// TODO: FEATURE IMPROVE, READY TO GO: ALTO AND TENOR STAFF

// TODO: NEW FEATURE, READY TO GO: SMART LEGER LINES
//  So you'd need a function isNoteOrNotehead() to check if a symbol is in one of the appropriate unicode ranges.
//  Automatic leger lines, when notes or noteheads are positioned outside ±5, should not prevent someone from placing
//  A note [i]without [/i]a leger line if they really need to, for some strange reason.
//  They should be able to temporarily turn auto-staff off and use a manual staff piece. e.g.
//  "stof st8 dn6 nt ston"

// TODO: FEATURE IMPROVE, BLOCKED: CLEFS CAN BE CSP'D AND THE MIDDLE C WILL BE SHIFTED
//  This will be blocked on adding the ligatures to the font, though
//  That part is introduced here: http://forum.sagittal.org/viewtopic.php?p=3163#p3163
//  Dave says "So in future, someone who wanted a tenor clef would write "up2 Ccl ;" or "[ tncl up2 Ccl ] tncl ;"."
//  Then see: http://forum.sagittal.org/viewtopic.php?p=3166#p3166
//  For an explanation of how instead you should just start tracking where middle C is
//  - Blocked on understanding what changes Dave already made to Bravura Text BB from Bravura Text
//  Because if I add ligatures for the clefs, I'll want to do it in a FontForge script
//  And I know I asked him at some point if he was keeping track of all of those changes, and I think he replied
//  But for the life of me I cannot find it

const POSITION_UNICODES = computeMapUnicodes({...GENERIC_POSITION_ALIASES_MAP, ...NOT_SMuFL_ZERO_POSITION_MAP})
const NOT_SMuFL_ZERO_POSITION_UNICODE = computeUnicodeForCode("up0" as Code)

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

const computeSmartPositionAndSmartClefPrefixUnicodeAndUpdateSmarts = (symbol: Symbol): Unicode => {
    updateSmartClef(symbol)
    updateSmartPosition(symbol)

    return canBePositioned(symbol.unicode) && smarts.position !== NOT_SMuFL_ZERO_POSITION_UNICODE ?
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
