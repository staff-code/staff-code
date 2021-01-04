import {Word} from "@sagittal/general"
import {Unicode} from "../codes"

const isNoteheadUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE0A0" && unicode <= "\uE0F4"

const isNoteheadNoteClusterOrIndividualNoteUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE0F7 " && unicode <= "\uE1E6"

const isIndividualNotesOrBeamedGroupsOfNotesUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE1E8 " && unicode <= "\uE1F6"

const isSimplifiedMusicNotationNoteheadsUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEC50" && unicode <= "\uEC53"

const isMoreSimplifiedMusicNotationNoteheadsUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEC59" && unicode <= "\uEC5A"

const isMedievalRenaissanceMensuralNoteheadsUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE930" && unicode <= "\uE93D"

const isMedievalRenaissanceMensuralIndividualNotesUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE950" && unicode <= "\uE96F"

const isMedievalRenaissanceMensuralObliqueFormsUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE970" && unicode <= "\uE98F"

const isShapeNoteNoteheadsSupplementUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uECD0" && unicode <= "\uECDF"

const isTechniquesNoteheadsUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEE70" && unicode <= "\uEE7F"

const isNoteheadsSupplementUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEEA0" && unicode <= "\uEEFF"

const isNoteheadNoteStemOrBeamedGroupsOfNotesUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE0A0" && unicode <= "\uE21F"

const isSpacingUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE388" && unicode <= "\uE38F"

const isOtherSagittalControlledNowForStaffCodeFeaturesUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE40C" && unicode <= "\uE41F"

const isFlagsAccidentalsArticulationHoldsPausesOrRestsUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE240" && unicode <= "\uE4FF"
    && !isSpacingUnicode(unicode)
    && !isOtherSagittalControlledNowForStaffCodeFeaturesUnicode(unicode)

const isMedievalAndRenaissanceUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uE900" && unicode <= "\uEA1F"

const isKievanSquareNotationUnicode = (unicode: Unicode & Word): boolean =>
    unicode >= "\uEC30" && unicode <= "\uEC3F"

export {
    isNoteheadNoteStemOrBeamedGroupsOfNotesUnicode,
    isFlagsAccidentalsArticulationHoldsPausesOrRestsUnicode,
    isKievanSquareNotationUnicode,
    isMedievalAndRenaissanceUnicode,
    isMedievalRenaissanceMensuralNoteheadsUnicode,
    isMedievalRenaissanceMensuralIndividualNotesUnicode,
    isMedievalRenaissanceMensuralObliqueFormsUnicode,
    isTechniquesNoteheadsUnicode,
    isSimplifiedMusicNotationNoteheadsUnicode,
    isMoreSimplifiedMusicNotationNoteheadsUnicode,
    isShapeNoteNoteheadsSupplementUnicode,
    isNoteheadsSupplementUnicode,
    isNoteheadUnicode,
    isNoteheadNoteClusterOrIndividualNoteUnicode,
    isIndividualNotesOrBeamedGroupsOfNotesUnicode,
}
