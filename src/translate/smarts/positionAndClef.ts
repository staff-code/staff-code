import {Clause, extendClause, max, RecordKey, Word} from "@sagittal/general"
import {
    BASS_POSITION_ALIASES_MAP,
    Code,
    computeUnicodeForCode,
    GENERIC_POSITION_ALIASES_MAP,
    LowercasedCode,
    LOWERCASED_CODE_MAP,
    TREBLE_POSITION_ALIASES_MAP,
    Unicode,
} from "../codes"
import {EMPTY_UNICODE} from "../constants"
import {computeUnicodeWidth} from "./advanceAndStave"
import {smarts} from "./globals"
import {Clef} from "./types"

const TREBLE_UNICODE = computeUnicodeForCode("Gcl" as Code & Word)
const BASS_UNICODE = computeUnicodeForCode("Fcl" as Code & Word)

const LEGER_LINE_UNICODE = computeUnicodeForCode("lgln" as Code & Word)
const LEGER_LINE_WIDTH = computeUnicodeWidth(LEGER_LINE_UNICODE)

const CLEF_LOWERCASED_CODE_MAPS: Record<Clef, Record<RecordKey<LowercasedCode & Word>, Unicode & Word>> = {
    [Clef.TREBLE]: {...LOWERCASED_CODE_MAP, ...TREBLE_POSITION_ALIASES_MAP},
    [Clef.BASS]: {...LOWERCASED_CODE_MAP, ...BASS_POSITION_ALIASES_MAP},
}

// TODO: FEATURE IMPROVE, READY TO GO: ALTO AND TENOR STAFF

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

const POSITION_UNICODES = Object.values(GENERIC_POSITION_ALIASES_MAP)
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

const updateSmartPosition = (unicode: Unicode & Word): void => {
    if (isPositionUnicode(unicode)) smarts.position = unicode
}

const computeStaffPosition = (): number =>
    smarts.position === EMPTY_UNICODE ?
        0 :
        15 - POSITION_UNICODES.indexOf(smarts.position)

const aboveOrBelowStave = (): boolean => {
    const position = computeStaffPosition()

    return position > 5 || position < -5
}

// todo it's probably time to break this module down too
const needsLegerLine = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && isInNoteheadNoteStemOrBeamedGroupsOfNotesRange(unicode) && aboveOrBelowStave()

const computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts = (
    unicode: Unicode & Word,
): Unicode & Clause => {
    updateSmartClef(unicode)
    updateSmartPosition(unicode)

    let smartPositionAndSmartClefUnicodeIntroClause = EMPTY_UNICODE as Unicode & Clause
    if (needsLegerLine(unicode)) {
        smartPositionAndSmartClefUnicodeIntroClause = extendClause(
            smartPositionAndSmartClefUnicodeIntroClause,
            `${smarts.position}${LEGER_LINE_UNICODE}` as Unicode & Word,
        ) as Unicode & Clause
        smarts.advanceWidth = max(smarts.advanceWidth, LEGER_LINE_WIDTH)
    }

    if (canBePositioned(unicode) && smarts.position !== NOT_SMuFL_ZERO_POSITION_UNICODE) {
        smartPositionAndSmartClefUnicodeIntroClause = extendClause(
            smartPositionAndSmartClefUnicodeIntroClause,
            smarts.position,
        ) as Unicode & Clause
    }

    return smartPositionAndSmartClefUnicodeIntroClause
}

const updateSmartClef = (unicode: Unicode & Word): void => {
    if (unicode === TREBLE_UNICODE) smarts.clef = Clef.TREBLE
    if (unicode === BASS_UNICODE) smarts.clef = Clef.BASS
}

const getUnicodeGivenClef = (lowercasedCode: LowercasedCode & Word): Unicode & Word =>
    CLEF_LOWERCASED_CODE_MAPS[smarts.clef][lowercasedCode]

export {
    canBePositioned,
    updateSmartPosition,
    isPositionUnicode,
    computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts,
    updateSmartClef,
    getUnicodeGivenClef,
}
