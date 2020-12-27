import {Clause, RecordKey, Word} from "@sagittal/general"
import {
    BASS_POSITION_ALIASES_MAP,
    Code,
    GENERIC_POSITION_ALIASES_MAP,
    LowercasedCode,
    LOWERCASED_CODE_MAP,
    NOT_SMuFL_ZERO_POSITION_MAP,
    Symbol,
    TREBLE_POSITION_ALIASES_MAP,
    Unicode,
} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {computeMapUnicodes, computeUnicodeForCode} from "../utility"
import {smarts} from "./globals"

const TREBLE_UNICODE = computeUnicodeForCode("Gcl" as Code & Word)
const BASS_UNICODE = computeUnicodeForCode("Fcl" as Code & Word)

const BASS_LOWERCASED_CODE_MAP: Record<RecordKey<LowercasedCode & Word>, Symbol> =
    {...LOWERCASED_CODE_MAP, ...BASS_POSITION_ALIASES_MAP} as Record<LowercasedCode & Word, Symbol>
const TREBLE_LOWERCASED_CODE_MAP: Record<RecordKey<LowercasedCode & Word>, Symbol> =
    {...LOWERCASED_CODE_MAP, ...TREBLE_POSITION_ALIASES_MAP} as Record<LowercasedCode & Word, Symbol>

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
const NOT_SMuFL_ZERO_POSITION_UNICODE = computeUnicodeForCode("up0" as Code & Word)

const isInLegerLineRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE022" && unicode <= "\uE024"

const isInNoteheadNoteStemOrBeamedGroupsOfNotesRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE0A0" && unicode <= "\uE21F"

const isInSpacingRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE388" && unicode <= "\uE38F"

const isInOtherSagittalControlledNowForStaffCodeFeaturesRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE40C" && unicode <= "\uE41F"

const isInFlagsAccidentalsArticulationHoldsPausesOrRestsRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE240" && unicode <= "\uE4FF"
    && !isInSpacingRange(unicode)
    && !isInOtherSagittalControlledNowForStaffCodeFeaturesRange(unicode)

const isInMedievalAndRenaissanceRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE900" && unicode <= "\uEA1F"

const isInKievanSquareNotationRange = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEC30" && unicode <= "\uEC3F"

const canBePositioned = (unicode: Unicode & Word): boolean =>
    isInLegerLineRange(unicode)
    || isInNoteheadNoteStemOrBeamedGroupsOfNotesRange(unicode)
    || isInFlagsAccidentalsArticulationHoldsPausesOrRestsRange(unicode)
    || isInMedievalAndRenaissanceRange(unicode)
    || isInKievanSquareNotationRange(unicode)

const isPositionUnicode = (unicode: Unicode & Word): boolean =>
    POSITION_UNICODES.includes(unicode)

const updateSmartPosition = ({unicode}: Symbol): void => {
    if (isPositionUnicode(unicode)) smarts.position = unicode
}

const computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts = (symbol: Symbol): Unicode & Clause => {
    updateSmartClef(symbol)
    updateSmartPosition(symbol)

    return canBePositioned(symbol.unicode) && smarts.position !== NOT_SMuFL_ZERO_POSITION_UNICODE ?
        smarts.position as Unicode as Unicode & Clause :
        EMPTY_UNICODE as Unicode & Clause
}

const updateSmartClef = ({unicode}: Symbol): void => {
    if (unicode === TREBLE_UNICODE) smarts.lowercasedCodeMap = TREBLE_LOWERCASED_CODE_MAP
    if (unicode === BASS_UNICODE) smarts.lowercasedCodeMap = BASS_LOWERCASED_CODE_MAP
}

export {
    canBePositioned,
    updateSmartPosition,
    isPositionUnicode,
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    updateSmartClef,
    TREBLE_LOWERCASED_CODE_MAP,
}
