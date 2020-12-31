import {BLANK, Clause, decrement, increment, isEven, isUndefined, sumTexts, Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {EMPTY_UNICODE} from "../../constants"
import {smarts} from "../globals"
import {LEGER_LINE_UNICODE, MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE, POSITION_UNICODES} from "./constants"
import {
    isInMedievalRenaissanceMensuralIndividualNotesRange,
    isInMedievalRenaissanceMensuralNoteheadsRange,
    isInMedievalRenaissanceMensuralObliqueFormsPlainchantSingleNoteFormsRange,
    isInMoreSimplifiedMusicNotationNoteheadsRange,
    isInNoteheadNoteClusterIndividualNotesOrBeamedGroupsOfNotesRange,
    isInNoteheadsSupplementRange,
    isInShapeNoteNoteheadsSupplementRange,
    isInSimplifiedMusicNotationNoteheadsRange,
    isInTechniquesNoteheadsRange,
} from "./ranges"
import {Position} from "./types"

const computeStaffPosition = (): Position =>
    smarts.positionUnicode === EMPTY_UNICODE ?
        0 as Position :
        MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE - POSITION_UNICODES.indexOf(smarts.positionUnicode) as Position

const computePositionUnicode = (position: Position): Unicode & Word =>
    POSITION_UNICODES[MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE - position]

const aboveOrBelowStave = (positionArgument?: Position): boolean => {
    const position = isUndefined(positionArgument) ? computeStaffPosition() : positionArgument

    return position > 5 || position < -5
}

const takesLegerLine = (unicode: Unicode & Word): boolean =>
    isInNoteheadNoteClusterIndividualNotesOrBeamedGroupsOfNotesRange(unicode)
    || isInSimplifiedMusicNotationNoteheadsRange(unicode)
    || isInMoreSimplifiedMusicNotationNoteheadsRange(unicode)
    || isInShapeNoteNoteheadsSupplementRange(unicode)
    || isInNoteheadsSupplementRange(unicode)
    || isInTechniquesNoteheadsRange(unicode)
    || isInMedievalRenaissanceMensuralIndividualNotesRange(unicode)
    || isInMedievalRenaissanceMensuralNoteheadsRange(unicode)
    || isInMedievalRenaissanceMensuralObliqueFormsPlainchantSingleNoteFormsRange(unicode)

const needsLegerLine = (unicode: Unicode & Word): boolean =>
    smarts.staveOn && takesLegerLine(unicode) && aboveOrBelowStave()

const computeSmartLegerUnicodeIntroClause = (): Unicode & Clause => {
    let smartLegerUnicodeIntroClause = BLANK as Unicode & Clause

    let position = computeStaffPosition()
    while (aboveOrBelowStave(position)) {
        if (isEven(position)) {
            smartLegerUnicodeIntroClause = sumTexts(
                smartLegerUnicodeIntroClause,
                `${computePositionUnicode(position)}${LEGER_LINE_UNICODE}` as Unicode & Clause,
            )
        }
        position = position > 0 ? decrement(position) : increment(position)
    }

    return smartLegerUnicodeIntroClause
}

export {
    computeSmartLegerUnicodeIntroClause,
    needsLegerLine,
}
